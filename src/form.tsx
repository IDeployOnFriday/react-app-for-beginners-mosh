import {useState} from "react";

export function MyForm() {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <p>Current value: {name}</p>
        </form>
    )
}