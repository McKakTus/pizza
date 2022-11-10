import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import { MainLayout } from "../layouts/MainLayout";
import { Axios } from '../core/axios';

import { AddressVerification } from "../components/AddressVerification";
import { Banners } from "../components/Banners";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";

export type UserData = {
  id: number;
  name: string;
  phone: string;
  email: string;
  birthday: string;
  googleId: string;
  isActive: number;
  token?: string;
};

type MainContextProps = {
  setFieldValue: (field: keyof UserData, value: string) => void;
  userData?: UserData;
};

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

const Home: NextPage = () => {
  const [userData, setUserData] = useState<UserData>();

  const setFieldValue = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (userData) {
      window.localStorage.setItem('userData', JSON.stringify(userData));
      // Axios.defaults.headers.Authorization = 'Bearer ' + userData.token;
    }
  }, [userData]);

  return (
    <MainContext.Provider value={{ userData, setFieldValue }}>      
      <MainLayout>
        <Categories />
        <Banners />
        <AddressVerification />

        <Products />
      </MainLayout>
    </MainContext.Provider>
  );
}

export const getServerSideProps = async (ctx) => {
  try {

  } catch (err) {
    console.log('Error!', err)
  }
  return { props: {} };
};

export default Home;