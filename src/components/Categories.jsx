
import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";


export default function Categories() {

    return (
        <section className="kategoriler">
  <div className="alt-kategoriler">
    <span>
      <img src={icon1} alt="" className="kategori-ikon" />
      YENİ! Kore
    </span>
    <span>
      <img src={icon2} alt="" className="kategori-ikon" />
      Pizza
    </span>
    <span>
      <img src={icon3} alt="" className="kategori-ikon" />
      Burger
    </span>
    <span>
      <img src={icon4} alt="" className="kategori-ikon" />
      Kızartmalar
    </span>
    <span>
      <img src={icon5} alt="" className="kategori-ikon" />
      Fast food
    </span>
    <span>
      <img src={icon6} alt="" className="kategori-ikon" />
      Gazlı içecek
    </span>
  </div>
</section>
    )
}