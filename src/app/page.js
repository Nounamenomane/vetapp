import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavToCatalog from "./components/NavToCatalog/NavToCatalog";
import PromoBlock from "./components/PromoBlock/PromoBlock";


export default function Home() {
  return (
    <>
      <Header />
      <PromoBlock/>
      <NavToCatalog />
      <Footer />
    </>
  )
}

  