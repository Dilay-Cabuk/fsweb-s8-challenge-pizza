import { useState } from "react";


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

export default function Order() {

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [note, setNote] = useState("");
    const [dough, setDough] = useState("");
    const [quantity, setQuantity] = useState(1);
    const isIngredientsValid = ingredients.length >= 4 && ingredients.length <= 10;
    const isNameValid = name.trim().length >= 3;
    const isDoughValid = dough !== "";
    const isFormValid = isNameValid && size !== "" && isIngredientsValid && isDoughValid;

    function handleSubmit(event) {
        event.preventDefault();

        if (isFormValid === false) {
            return;
        }
        console.log({ name, size, ingredients, note });
    }

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


    return (

        <main>
            <h1>Sipariş Oluştur</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Boyut Seç</legend>
                    <label htmlFor="size-small">
                        <input
                            type="radio"
                            name="size"
                            id="size-small"
                            value="Küçük"
                            checked={size === "Küçük"}
                            onChange={(event) => setSize(event.target.value)}
                        />
                        Küçük</label>

                    <label htmlFor="size-medium">
                        <input
                            type="radio"
                            name="size"
                            id="size-medium"
                            value="Orta"
                            checked={size === "Orta"}
                            onChange={(event) => setSize(event.target.value)}
                        />
                        Orta</label>

                    <label htmlFor="size-large">
                        <input
                            type="radio"
                            name="size"
                            id="size-large"
                            value="Büyük"
                            checked={size === "Büyük"}
                            onChange={(event) => setSize(event.target.value)}
                        />
                        Büyük</label>

                </fieldset>


                <label htmlFor="dough">Hamur seç
                    <select
                        name="dough"
                        id="dough"
                        value={dough}
                        onChange={(event) => setDough(event.target.value)}
                    >
                        <option value="">Hamur Kalınlığı Seçiniz</option>
                        <option value="ince">ince</option>
                        <option value="normal">normal</option>
                        <option value="kalin">kalin</option>
                    </select>
                </label>


                <fieldset>
                    <legend>Ek Malzemeler</legend>
                    {ingredientOptions.map((option) => (

                        <label htmlFor={"ingredient-" + option.value} key={option.value}>
                            <input
                                type="checkbox"
                                name="ingredients"
                                value={option.value}
                                id={"ingredient-" + option.value}
                                checked={ingredients.includes(option.value)}
                                onChange={handleIngredientChange} />
                            {option.label}</label>

                    ))}

                </fieldset>
                <p>Seçilenler: {ingredients.join(", ")}</p>
                {ingredients.length > 0 && !isIngredientsValid && (
                    <p>En az 4, en fazla 10 malzeme seçmelisiniz.</p>
                )}

                <label htmlFor="name">Adınız
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>

                {name.length > 0 && !isNameValid && (
                    <p>Adınız en az 3 karakter olmalı.</p>
                )}

                <label htmlFor="note">Sipariş Notu
                    <textarea name="note" id="note" value={note} onChange={(event) => setNote(event.target.value)}></textarea>
                </label>

                <div>
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

                <button type="submit" disabled={!isFormValid}>
                    Sipariş Ver
                </button>
            </form>
        </main>
    )
}