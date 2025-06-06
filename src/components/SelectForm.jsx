import React, { useState } from "react";
import { Form, Card, Alert } from "react-bootstrap"; // Import Bootstrap components

const SelectForm = () => {
    // State to hold the selected fruit
    const [fruit, setFruit] = useState("apple");

    return (
        <div className="container mt-5"> {/* Bootstrap container for centering and padding */}
            <Card className="shadow-lg p-4"> {/* Card for a raised effect with shadow */}
                <h3 className="card-title text-center mb-4">Select Form Example</h3>

                <Form>
                    <Form.Group className="mb-3" controlId="formFruitSelect">
                        <Form.Label className="fw-bold text-primary mb-3">Select Your Favorite Fruit:</Form.Label>
                        <Form.Select
                            value={fruit}
                            onChange={(e) => setFruit(e.target.value)}
                            className="shadow-sm" // Add a subtle shadow to the select box
                        >
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="mango">Mango</option>
                            <option value="orange">Orange</option> {/* Added another option for variety */}
                            <option value="grape">Grape</option>
                        </Form.Select>
                    </Form.Group>
                </Form>

                <hr className="my-4" /> {/* Horizontal rule for separation */}

                {/* Display selected fruit with dynamic styling */}
                <Alert variant="info" className="text-center mt-3">
                    <h5 className="mb-0">Selected Fruit: <span className="text-dark fw-bold">{fruit}</span></h5>
                </Alert>
            </Card>
        </div>
    );
};

export default SelectForm;