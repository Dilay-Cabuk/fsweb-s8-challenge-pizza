
import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";
import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";


export default function Products() {

    return (
        <section className="urunler">
  <p className="urunler-ust-baslik"> en çok paketlenen menüler</p>
  <h2 className="urunler-alt-baslik">Acıktıran Kodlara Doyuran Lezzetler</h2>

  <div className="kategori-menu">
    <span>
      <img src={icon1} alt="Ramen" className="urun-kategori-ikon" />
      Ramen
    </span>

    <span className="aktif-kategori">
      <img src={icon2}  alt="Pizza" className="urun-kategori-ikon"/>
      Pizza
    </span>

    <span>
      <img src={icon3}  alt="Burger" className="urun-kategori-ikon" />
      Burger
    </span>

    <span>
      <img src={icon4}  alt="French fries" className="urun-kategori-ikon" />
      French fries
    </span>

    <span>
      <img src={icon5}  alt="Fast food" className="urun-kategori-ikon" />
      Fast food
    </span>

    <span>
      <img src={icon6}  alt="Soft drinks" className="urun-kategori-ikon" />
      Soft drinks
    </span>
  </div>
  
  <div className="urun-kartlari">
    <article className="urun-kart">
      <img src={food1} alt="mısır ve mantar sevenler için pizza" className="urun-kart-foto" />
     <h3>Terminal Pizza</h3>
     <div className="urun-bilgileri">
      <p>4.9</p> 
      <p>(200)</p>
      <p className="fiyat">60₺</p>
    </div>
    </article>
      
     <article className="urun-kart">
     <img src={food2} alt="acı sevenler için pizza" className="urun-kart-foto" />
      <h3>Position Absolute Acı Pizza</h3>
      <div className="urun-bilgileri">
      <p>4.9</p> 
      <p>(200)</p>
      <p className="fiyat">60₺</p>
    </div>
    </article>

     <article className="urun-kart">
      <img src={food3} alt="bol malzemeli tavuk burger" className="urun-kart-foto" />
         <h3>useEffect Tavuklu Burger</h3>
        <div className="urun-bilgileri">
      <p>4.9</p> 
      <p>(200)</p>
      <p className="fiyat">60₺</p>
     </div>
    </article>
  </div>
 </section>
    )
}