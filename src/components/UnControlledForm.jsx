import { useRef } from "react";
import '../assets/UnControlledForm.css';

const UncontrolledForm = () => {
    const nameRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Entered Name: ${nameRef.current.value}`);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="fade-in-form">
                <h2 className="form-title">Uncontrolled Form</h2>
                <input
                    type="text"
                    ref={nameRef}
                    placeholder="Enter your name"
                    className="form-input"
                />
                <button type="submit" className="form-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UncontrolledForm;
