import { AddressVerification } from "../components/AddressVerification";
import { Banners } from "../components/Banners";
import { CartPopup } from "../components/CartPopup";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <>      
      <Navbar />
      <Header hideMenu />

      <MainLayout>
        <Categories />
        <Banners />
        <AddressVerification />

        <Products />

        <CartPopup />
      </MainLayout>
    </>
  );
}