

function Success({ order }) { 
    
    if(order === null) {
        return "Henüz bir sipariş oluşturulmadı."; 
    }

    return (
        <>
            <h1>Siparişiniz Alındı!</h1>
            <p>Müşteri adı {order.name}</p>
            <p>Pizza boyutu {order.size}</p>
            <p>Hamur kalınlığı {order.dough}</p>
            <p>	Ek malzemeler {order.ingredients.join(", ")}</p>
            <p>Sipariş notu {order.note}</p>
            <p>	Adet {order.quantity}</p>
            <p>	Toplam fiyat {order.totalPrice.toFixed(2)} ₺</p>

        </>
    );
}

export default Success;