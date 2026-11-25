import logo from "../../images/iteration-1-images/logo.svg";

export default function Home() {
  return (
    <header className="home-hero">
        
      <img src={logo} alt="Teknolojik Yemekler logosu"/>
      <p>fırsatı kaçırma</p>
      <h1>
        KOD ACIKTIRIR <br/> PİZZA DOYURUR
      </h1>
     <button className="btn">ACIKTIM</button>
        
    </header> 
  ) ;
}