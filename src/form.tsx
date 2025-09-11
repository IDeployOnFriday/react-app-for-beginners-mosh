import {useState, type SetStateAction} from "react";

export function MyForm() {
    const [name, setName] = useState("");

    function handleChange(e: { target: { value: SetStateAction<string>; }; }) {
        setName(e.target.value);
    }

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        alert(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}