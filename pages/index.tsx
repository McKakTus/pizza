import { AddressVerification } from "../components/AddressVerification";
import { Banners } from "../components/Banners";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <>      
      <MainLayout>
        <Categories />
        <Banners />
        <AddressVerification />

        <Products />
      </MainLayout>
    </>
  );
}