import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavToCatalog from "./components/NavToCatalog/NavToCatalog";
import Subscription from "./components/Subscription/Subscription";
import PromoBlock from "./components/PromoBlock/PromoBlock";


export default function Home() {
  return (
    <>
      <Header />
      <NavToCatalog />
      <Subscription />
      <Footer />
      <PromoBlock/>
    </>
  )
}

  