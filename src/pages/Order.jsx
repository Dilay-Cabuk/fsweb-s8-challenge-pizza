import { useState } from "react";

export default function Order() {

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const isNameValid = name.trim().length >= 3;
    const isFormValid = isNameValid && size !== "";

    function handleSubmit(event) {
        event.preventDefault();

        if (isFormValid === false) {
            return;
        }
        console.log(name);
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

                <button type="submit" disabled={!isFormValid}>
                    Sipariş Ver
                </button>
            </form>
        </main>
    )
}