import logo from "../../images/iteration-1-images/logo.svg";

function Success({ order }) {

    if (order === null) {
        return "Henüz bir sipariş oluşturulmadı.";
    }

    return (
        <main className="success-page">
            <img src={logo} alt="Teknolojik Yemekler" className="success-logo" />
            <h1>Siparişiniz Alındı!</h1>
            <section className="success-order-details" >
                <p>Müşteri adı: {order.name}</p>
                <p>Pizza boyutu: {order.size}</p>
                <p>Hamur kalınlığı: {order.dough}</p>
                <p>	Ek malzemeler: {order.ingredients.join(", ")}</p>
                <p>Sipariş notu: {order.note || "Belirtilmedi"}  </p>
                <p>	Adet: {order.quantity}</p>

            </section>
            <div className="success-order-summary">
                <h2>Sipariş Toplamı</h2>
                <p>Seçimler: {(order.ingredients.length * 5).toFixed(2)} ₺</p>
                <p>	Toplam fiyat: {order.totalPrice.toFixed(2)} ₺</p>
            </div>
        </main>
    );
}

export default Success;