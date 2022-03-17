import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <>      
      <Navbar />
      <Header hideMenu />

      <MainLayout>
        <Categories />
      </MainLayout>
    </>
  );
}