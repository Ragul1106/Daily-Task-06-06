import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h3 className="card-title text-center mb-4">Controlled Form </h3>

                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label className="fw-bold text-primary">Your Name:</Form.Label>
                        <InputGroup className={isFocused ? 'shadow-sm border-primary' : ''}>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={name && 'is-valid'}
                            />
                        </InputGroup>
                        {name && (
                            <Form.Text className="text-success mt-2 d-block">
                                {name}!
                            </Form.Text>
                        )}
                        {!name && (
                            <Form.Text className="text-muted mt-2 d-block">
                                Start typing !
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form>

                <hr className="my-4" />

                <div className="alert alert-info text-center mt-3">
                    <h5 className="mb-0">Typed Name: <span className="text-dark fw-bold">{name || 'Nothing yet...'}</span></h5>
                </div>
            </div>
        </div>
    );
};

export default ControlledForm;