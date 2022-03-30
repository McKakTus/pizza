import React, { useEffect, useState } from "react";
import { AddressVerification } from "../components/AddressVerification";
import { Banners } from "../components/Banners";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import { MainLayout } from "../layouts/MainLayout";
import { checkAuth } from "../utils/checkAuth";
import { Axios } from '../core/axios';
import { wrapper } from "../redux/store";

export type UserData = {
  id: number;
  username: string;
  phone: string;
  email: string;
  password: string;
  googleId: string;
  isActive: number;
  token?: string;
};

type MainContextProps = {
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setFieldValue: (field: keyof UserData, value: string) => void;
  userData?: UserData;
};

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

// const getUserData = (): UserData | null => {
//   try {
//     return JSON.parse(window.localStorage.getItem('userData'));
//   } catch (error) {
//     return null;
//   }
// };

export default function Home() {
  const [userData, setUserData] = useState<UserData>();

  const setFieldValue = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const json = getUserData();
  //     if (json) {
  //       setUserData(json);
  //     }
  //   }
  // }, []);
  
  useEffect(() => {
    if (userData) {
      window.localStorage.setItem('userData', JSON.stringify(userData));
      // window.localStorage.setItem('userData', userData ? JSON.stringify(userData) : '');
      Axios.defaults.headers.Authorization = 'Bearer ' + userData.token;
    }
  }, [userData]);

  return (
    <MainContext.Provider value={{ userData, setUserData, setFieldValue }}>      
      <MainLayout>
        <Categories />
        <Banners />
        <AddressVerification />

        <Products />
      </MainLayout>
    </MainContext.Provider>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
//   try {
//     const user = await checkAuth(ctx);

//     if (user) {
//       return {
//         props: {},
//         // redirect: {
//         //   destination: '/',
//         //   permanent: false,
//         // },
//       };
//     }
//   } catch (err) {}

//   return { props: {} };
// });
