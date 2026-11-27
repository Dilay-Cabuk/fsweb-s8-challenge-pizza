import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import logo from "../../images/iteration-1-images/logo.svg";
import pizzaBanner from "../../images/iteration-2-images/pictures/form-banner.png";

const ingredientOptions = [
    { value: "pepperoni", label: "Pepperoni" },
    { value: "domates", label: "Domates" },
    { value: "biber", label: "Biber" },
    { value: "sosis", label: "Sosis" },
    { value: "misir", label: "Mısır" },
    { value: "sucuk", label: "Sucuk" },
    { value: "kanada-jambonu", label: "Kanada Jambonu" },
    { value: "ananas", label: "Ananas" },
    { value: "tavuk-izgara", label: "Tavuk Izgara" },
    { value: "jalepeno", label: "Jalepeno" },
    { value: "kabak", label: "Kabak" },
    { value: "sogan", label: "Soğan" },
    { value: "sarimsak", label: "Sarımsak" },
];

const basePrice = 85.50;
const ingredientPrice = 5;

export default function Order({ setOrder }) {

    // STATE

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [note, setNote] = useState("");
    const [dough, setDough] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [errorMessage, setErrorMessage] = useState("");

    const history = useHistory();

    // FORM VALIDATION

    const isIngredientsValid = ingredients.length >= 4 && ingredients.length <= 10;
    const isNameValid = name.trim().length >= 3;
    const isDoughValid = dough !== "";

    const isFormValid =
        isNameValid &&
        size !== "" &&
        isIngredientsValid &&
        isDoughValid;

    // PRICE CALCULATIONS

    const ingredientsTotal = ingredients.length * ingredientPrice;
    const totalPrice = (basePrice + ingredientsTotal) * quantity;

    // INGREDIENT CHANGE

    function handleIngredientChange(event) {
        const value = event.target.value;
        const checked = event.target.checked;

        if (checked) {
            setIngredients((prev) => [...prev, value]);
        } else {
            setIngredients((prev) =>
                prev.filter((item) => item !== value)
            );
        }
    }

    // FORM SUBMIT

    function handleSubmit(event) {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }

        setErrorMessage("");

        const orderData = {
            name,
            size,
            dough,
            ingredients,
            note,
            quantity,
            totalPrice
        };

        console.log(orderData);

        axios.post("https://reqres.in/api/pizza", orderData, {
            headers: {
                "x-api-key": import.meta.env.VITE_REQRES_API_KEY
            }
        })
            .then((response) => {
                setOrder(response.data);
                console.log(response.data);
                history.push("/success");
            })
            .catch((error) => {
                setErrorMessage("Sipariş oluşturulamadı. Lütfen tekrar deneyiniz.");
                console.log(error);
            });
    }

    return (
        <main className="order-page">

            {/* HEADER */}

            <header className="order-header">
                <img
                    src={logo}
                    alt="Teknolojik Yemekler"
                    className="order-logo"
                />

                <nav className="order-navigation">
                    <Link to="/">Anasayfa</Link>
                    <span> / </span>
                    <span className="active-page">Sipariş Oluştur</span>
                </nav>
            </header>

            {/* PRODUCT INFORMATION */}

            <section className="order-product">
                <img
                    src={pizzaBanner}
                    alt="Position Absolute Acı Pizza"
                    className="order-product-image"
                />

                <h1 className="order-product-title">
                    Position Absolute Acı Pizza
                </h1>

                <div className="order-product-info">
                    <p className="order-product-price">
                        {basePrice.toFixed(2)} ₺
                    </p>

                    <div className="order-product-rating">
                        <span>4.9</span>
                        <span>(200)</span>
                    </div>
                </div>

                <p className="order-product-description">
                    Frontend Dev olarak hala position:absolute kullanıyorsan
                    bu çok acı pizza tam sana göre. Pizza, domates, peynir ve
                    genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
                    geleneksel olarak odun ateşinde pişirilen bir yemektir.
                </p>
            </section>

            {/* ORDER FORM */}

            <form onSubmit={handleSubmit} className="order-form">

                {/* SIZE & DOUGH */}

                <div className="order-options">

                    <fieldset className="order-size">
                        <legend>Boyut Seç</legend>

                        <label htmlFor="size-small" className="order-size-option">
                            <input
                                type="radio"
                                name="size"
                                id="size-small"
                                value="Küçük"
                                checked={size === "Küçük"}
                                onChange={(event) => setSize(event.target.value)}
                            />
                            Küçük
                        </label>

                        <label htmlFor="size-medium" className="order-size-option">
                            <input
                                type="radio"
                                name="size"
                                id="size-medium"
                                value="Orta"
                                checked={size === "Orta"}
                                onChange={(event) => setSize(event.target.value)}
                            />
                            Orta
                        </label>

                        <label htmlFor="size-large" className="order-size-option">
                            <input
                                type="radio"
                                name="size"
                                id="size-large"
                                value="Büyük"
                                checked={size === "Büyük"}
                                onChange={(event) => setSize(event.target.value)}
                            />
                            Büyük
                        </label>
                    </fieldset>

                    <label htmlFor="dough" className="order-dough">
                        Hamur Seç

                        <select
                            name="dough"
                            id="dough"
                            value={dough}
                            onChange={(event) => setDough(event.target.value)}
                        >
                            <option value="">Hamur Kalınlığı Seçiniz</option>
                            <option value="ince">İnce</option>
                            <option value="normal">Normal</option>
                            <option value="kalin">Kalın</option>
                        </select>
                    </label>

                </div>

                {/* EXTRA INGREDIENTS */}

                <fieldset className="order-ingredients">
                    <legend>Ek Malzemeler</legend>

                    <p className="ingredients-description">
                        En az 4, en fazla 10 malzeme seçebilirsiniz.
                        5₺ / Malzeme
                    </p>

                    <div className="ingredients-grid">
                        {ingredientOptions.map((option) => (
                            <label
                                htmlFor={"ingredient-" + option.value}
                                key={option.value}
                                className="ingredient-option"
                            >
                                <input
                                    type="checkbox"
                                    name="ingredients"
                                    value={option.value}
                                    id={"ingredient-" + option.value}
                                    checked={ingredients.includes(option.value)}
                                    onChange={handleIngredientChange}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </fieldset>

                <p className="selected-ingredients">
                    Seçilenler: {ingredients.join(", ")}
                </p>

                {ingredients.length > 0 && !isIngredientsValid && (
                    <p className="order-error">
                        En az 4, en fazla 10 malzeme seçmelisiniz.
                    </p>
                )}

                {/* CUSTOMER NAME */}

                <label htmlFor="name" className="order-name">
                    Adınız

                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>

                {name.length > 0 && !isNameValid && (
                    <p className="order-error">
                        Adınız en az 3 karakter olmalı.
                    </p>
                )}

                {/* ORDER NOTE */}

                <label htmlFor="note" className="order-note">
                    Sipariş Notu

                    <textarea
                        name="note"
                        id="note"
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                    />
                </label>

                {/* QUANTITY & CHECKOUT */}

                <div className="order-bottom">

                    <div className="order-quantity">
                        <button
                            type="button"
                            onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)}
                        >
                            -
                        </button>

                        <span>{quantity}</span>

                        <button
                            type="button"
                            onClick={() => setQuantity(prev => prev + 1)}
                        >
                            +
                        </button>
                    </div>

                    <div className="order-checkout">

                        <div className="order-summary">
                            <h3>Sipariş Toplamı</h3>

                            <p>
                                <span>Seçimler</span>
                                <span>{ingredientsTotal.toFixed(2)} ₺</span>
                            </p>

                            <p className="order-total">
                                <span>Toplam</span>
                                <span>{totalPrice.toFixed(2)} ₺</span>
                            </p>
                        </div>

                        {errorMessage.length > 0 && (
                            <p className="order-error">
                                {errorMessage}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className="order-submit"
                        >
                            Sipariş Ver
                        </button>

                    </div>

                </div>

            </form>
        </main>
    );
}