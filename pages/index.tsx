import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

import { MainLayout } from "../layouts/MainLayout";
import { checkAuth } from "../utils/checkAuth";
import { Axios } from '../core/axios';

import { AddressVerification } from "../components/AddressVerification";
import { Banners } from "../components/Banners";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import { UserApi } from "../api/UserApi";

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
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
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
      Axios.defaults.headers.Authorization = 'Bearer ' + userData.token;
    }
  }, [userData]);

  return (
    <MainContext.Provider value={{ userData, setUserData, setFieldValue }}>      
      <MainLayout>
        <Head>
          <title>Куда Пицца</title>
          <meta name="description" content="Куда Пицца - Лучшая пицца в мире" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Categories />
        <Banners />
        <AddressVerification />

        <Products />
      </MainLayout>
    </MainContext.Provider>
  );
}

export const getServerSideProps = async (ctx) => {
  console.log(ctx.req.headers.cookie);
  // 2.18.22
  try {
    const user = await checkAuth(ctx);

    if (user) {
      return {
        props: {},
        redirect: {
          destination: '/profile/1',
          permanent: false,
        },
      };
    }
  } catch (err) {
    console.log('Error!', err)
  }
  return { props: {} };
};

export default Home;