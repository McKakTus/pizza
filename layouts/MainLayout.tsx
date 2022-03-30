import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

interface MainLayoutProps {

}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar />
            <Header />

            <div className="wrapper">{children}</div>

            <Footer />
        </>
    );
}

export default MainLayout;