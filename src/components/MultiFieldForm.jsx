import React, { useState } from 'react';
import { Form, Button, InputGroup, Alert } from 'react-bootstrap';

const MultiFieldForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);

    const [submissionMessage, setSubmissionMessage] = useState(null);
    const [showSubmissionAlert, setShowSubmissionAlert] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log("Form Data Submitted:", formData);

        setSubmissionMessage(`Form Submitted! Name: ${formData.name}, Email: ${formData.email}`);
        setShowSubmissionAlert(true);
  
        setTimeout(() => {
            setShowSubmissionAlert(false);
            setSubmissionMessage(null); 
        }, 5000);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h3 className="card-title text-center mb-4">Multi-Field Form </h3>

                {showSubmissionAlert && submissionMessage && (
                    <Alert variant="success" className="mb-4 text-center">
                        {submissionMessage}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label className="fw-bold text-primary">Name:</Form.Label>
                        <InputGroup
                            className={isNameFocused ? 'shadow-sm border-primary' : ''}
                        >
                            <InputGroup.Text>&#128100;</InputGroup.Text> 
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setIsNameFocused(true)}
                                onBlur={() => setIsNameFocused(false)}
                                className={formData.name ? 'is-valid' : ''}
                            />
                        </InputGroup>
                        {formData.name ? (
                            <Form.Text className="text-success mt-2 d-block">
                                Name looks good!
                            </Form.Text>
                        ) : (
                            <Form.Text className="text-muted mt-2 d-block">
                                Please enter your full name.
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formEmail">
                        <Form.Label className="fw-bold text-primary">Email:</Form.Label>
                        <InputGroup
                            className={isEmailFocused ? 'shadow-sm border-primary' : ''}
                        >
                            <InputGroup.Text>&#9993;</InputGroup.Text> 
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}

                                className={formData.email.includes('@') && formData.email.includes('.') ? 'is-valid' : ''}
                            />
                        </InputGroup>
                        {formData.email.includes('@') && formData.email.includes('.') ? (
                            <Form.Text className="text-success mt-2 d-block">
                                Valid email address.
                            </Form.Text>
                        ) : (
                            <Form.Text className="text-muted mt-2 d-block">
                                Please enter a valid email address.
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100 py-2 mt-3 shadow-sm transition-all duration-300 ease-in-out hover:scale-105"
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default MultiFieldForm;