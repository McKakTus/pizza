import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import  {MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <>      
      <Header hideMenu />

      <MainLayout>
        <Categories />
      </MainLayout>
    </>
  );
}