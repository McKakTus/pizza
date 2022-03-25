import React, { useState } from "react";
import { AddressVerification } from "../components/AddressVerification";
import { Banners } from "../components/Banners";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import { MainLayout } from "../layouts/MainLayout";

export type UserData = {
  id: number;
  username: string;
  phone: string;
  email: string;
  isActive: number;
  token?: string;
}

type MainContextProps = {
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setFieldValue: (field: keyof UserData, value: string) => void;
  userData?: UserData;
}

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

export default function Home() {
  const [userData, setUserData] = useState<UserData>();

  const setFieldValue = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <MainContext.Provider value={{userData, setUserData, setFieldValue}}>      
      <MainLayout>
        <Categories />
        <Banners />
        <AddressVerification />

        <Products />
      </MainLayout>
    </MainContext.Provider>
  );
}