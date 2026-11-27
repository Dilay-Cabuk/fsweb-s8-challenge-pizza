
import { Link } from "react-router-dom";

export default function Campaigns() {

    return (
        <section className="kampanyalar">
      <article className="kart kart-1"> 
        <h2>Özel <br/> Lezzetus </h2>
        <p>Position:Absolute Acı Burger</p>
        <Link to="/order" className="btn">SİPARİŞ VER</Link>
      </article>
      <article className="kart kart-2">
        <h2>Hackathlon <br/> Burger Menü</h2>
        <Link to="/order" className="btn">SİPARİŞ VER</Link>
       </article>
      <article className="kart kart-3"> 
        <h2> <span className="kelime">Cooooook</span> hızlı <br/> npm gibi kurye</h2>
        <Link to="/order" className="btn">SİPARİŞ VER</Link>
      </article>
    </section>
    )
}