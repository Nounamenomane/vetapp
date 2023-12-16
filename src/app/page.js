import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavToCatalog from "./components/NavToCatalog/NavToCatalog";
import PromoBlock from "./Components/PromoBlock/PromoBlock";


export default function Home() {
  return (
    <>
      <Header />
      <Footer />
      <NavToCatalog />
      <PromoBlock/>
    </>
  )
}