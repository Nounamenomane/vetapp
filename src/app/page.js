// 'use client'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavToCatalog from "./components/NavToCatalog/NavToCatalog";
import Subscription from "./components/Subscription/Subscription";
import PromoBlock from "./components/PromoBlock/PromoBlock";
import SliderProducts from "./components/SliderProducts/SliderProducts";

export const metadata = {
  title: "HomePage",
};

export default function Home() {
  return (
    <>
      <Header />
      <PromoBlock />
      <NavToCatalog />
      <SliderProducts />
      <Subscription />
      <Footer />
    </>
  )
}

