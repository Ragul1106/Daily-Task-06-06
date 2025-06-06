import { useState } from "react";
import "../assets/ValidationForm.css"; 

const ValidationForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.includes("@")) {
            setError("Invalid email format");
            return;
        }
        alert(`Submitted Email: ${email}`);
        setError("");
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="validation-form fade-in-form">
                <h2 className="form-title">Email Validation Form</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className={`form-input ${error ? "input-error" : ""}`}
                />
                {error && <p className="error-text">{error}</p>}
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
};

export default ValidationForm;
