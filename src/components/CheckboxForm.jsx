import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CheckboxForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h3 className="card-title text-center mb-4">Checkbox Form </h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Accept Terms & Conditions"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="fw-bold text-primary"
                        />
                        {isChecked ? (
                            <Form.Text className="text-success mt-2 d-block">
                                <span role="img" aria-label="accepted">✅</span> Terms Accepted!
                            </Form.Text>
                        ) : (
                            <Form.Text className="text-danger mt-2 d-block">
                                <span role="img" aria-label="not accepted">❌</span> Please accept the terms.
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default CheckboxForm;