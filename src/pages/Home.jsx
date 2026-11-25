import logo from "../../images/iteration-1-images/logo.svg";
import Categories from "../components/Categories";
import Campaigns from "../components/Campaigns";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <header className="home-hero">
        
      <img src={logo} alt="Teknolojik Yemekler logosu"/>
      <p>fırsatı kaçırma</p>
      <h1>
        KOD ACIKTIRIR <br/> PİZZA DOYURUR
      </h1>
     <button className="btn">ACIKTIM</button>
        
    </header> 
    
    <Categories />
    <Campaigns />
    <Products />
    <Footer />
    </>
  ) ;
}