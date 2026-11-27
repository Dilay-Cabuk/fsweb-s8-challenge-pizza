import logo from "../../images/iteration-1-images/logo.svg";
import Categories from "../components/Categories";
import Campaigns from "../components/Campaigns";
import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="home-hero">
        <img src={logo} alt="Teknolojik Yemekler logosu" />

        <p>fırsatı kaçırma</p>

        <h1>
          KOD ACIKTIRIR <br /> PİZZA DOYURUR
        </h1>

        <Link className="btn" to="/order">
          ACIKTIM
        </Link>
      </header>

      <Categories />

      <main className="home-content">
        <Campaigns />
        <Products />
      </main>
    </>
  );
}