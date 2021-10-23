import { Card, Form, Button } from 'react-bootstrap';

function Singup() {
    return (
        <Card>
            <Card.Body>
                <h1>Sign Up</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Signup 
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Singup