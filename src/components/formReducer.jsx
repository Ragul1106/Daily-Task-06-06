import { useReducer } from "react";
import "../assets/ComplexForm.css"; 

const formReducer = (state, action) => {
    return { ...state, [action.name]: action.value };
};

const ComplexForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${formState.username}\nPassword: ${formState.password}`);
    };

    return (
        <div className="terminal-wrapper">
            <form onSubmit={handleSubmit} className="terminal-form">
                <h2 className="terminal-title">[ Form Reducer ]</h2>
                <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={(e) => dispatch(e.target)}
                    placeholder="> Enter Username"
                    className="terminal-input"
                />
                <input
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={(e) => dispatch(e.target)}
                    placeholder="> Enter Password"
                    className="terminal-input"
                />
                <button type="submit" className="terminal-button">Submit</button>
            </form>
        </div>
    );
};

export default ComplexForm;
