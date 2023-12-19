import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavToCatalog from "./components/NavToCatalog/NavToCatalog";
import Subscription from "./components/Subscription/Subscription";


export default function Home() {
  return (
    <>
      <Header />
      <NavToCatalog />
      <Subscription />
      <Footer />
    </>
  )
}

