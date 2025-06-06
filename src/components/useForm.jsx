import { useState } from "react";
import "../assets/CustomHookForm.css"; 


const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    return { values, handleChange };
};

const CustomHookForm = () => {
    const { values, handleChange } = useForm({ name: "", email: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${values.name}\nEmail: ${values.email}`);
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="custom-form fade-in-form">
                <h2 className="form-title">Custom Hook Form</h2>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-input"
                />
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-input"
                />
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
};

export default CustomHookForm;
