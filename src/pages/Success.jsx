import { Redirect } from "react-router-dom";
import logo from "../../images/iteration-1-images/logo.svg";

export default function Success({ order }) {
  if (order === null) {
    return <Redirect to="/order" />;
  }

  return (
    <main className="success-page">
      <img
        src={logo}
        alt="Teknolojik Yemekler"
        className="success-logo"
      />

      <p className="success-subtitle">lezzetin yolda</p>

      <h1>SİPARİŞ ALINDI</h1>

      <section className="success-order-details">
        <h2>Position Absolute Acı Pizza</h2>

        <p>
          Müşteri adı: <strong>{order.name}</strong>
        </p>

        <p>
          Boyut: <strong>{order.size}</strong>
        </p>

        <p>
          Hamur: <strong>{order.dough}</strong>
        </p>

        <p>
          Ek Malzemeler: <strong>{order.ingredients.join(", ")}</strong>
        </p>

        <p>
          Sipariş Notu: <strong>{order.note || "Belirtilmedi"}</strong>
        </p>

        <p>
          Adet: <strong>{order.quantity}</strong>
        </p>
      </section>

      <section className="success-order-summary">
        <h2>Sipariş Toplamı</h2>

        <p>
          <span>Seçimler</span>
          <span>{(order.ingredients.length * 5).toFixed(2)} ₺</span>
        </p>

        <p>
          <span>Toplam</span>
          <span>{order.totalPrice.toFixed(2)} ₺</span>
        </p>
      </section>
    </main>
  );
}