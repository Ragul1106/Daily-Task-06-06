import React, { useState } from "react";
import { Form, Card, Alert } from "react-bootstrap"; 

const RadioButtonForm = () => {

    const [gender, setGender] = useState("");

    return (
        <div className="container mt-5"> 
            <Card className="shadow-lg p-4"> 
                <h3 className="card-title text-center mb-4">Radio Button Form Example</h3>

                <Form>
                    <Form.Group className="mb-3" controlId="formGender">
                        <Form.Label className="fw-bold text-primary mb-3">Select Your Gender:</Form.Label>
                        <div className="d-flex flex-column gap-2"> 
                            <Form.Check
                                type="radio"
                                id="genderMale"
                                name="gender"
                                label="Male"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={(e) => setGender(e.target.value)}
                                className="fw-semibold" 
                            />
                            <Form.Check
                                type="radio"
                                id="genderFemale"
                                name="gender"
                                label="Female"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={(e) => setGender(e.target.value)}
                                className="fw-semibold" 
                            />
                            <Form.Check
                                type="radio"
                                id="genderOther"
                                name="gender"
                                label="Other"
                                value="Other"
                                checked={gender === "Other"}
                                onChange={(e) => setGender(e.target.value)}
                                className="fw-semibold" 
                            />
                        </div>
                    </Form.Group>
                </Form>

                <hr className="my-4" /> 

                <Alert variant={gender ? "info" : "secondary"} className="text-center mt-3">
                    <h5 className="mb-0">Selected: <span className="text-dark fw-bold">{gender || 'None selected'}</span></h5>
                </Alert>
            </Card>
        </div>
    );
};

export default RadioButtonForm;