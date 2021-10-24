import { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../context/authContext';

function Singup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [ error, setError ] = useState('');
    const { currentUser, signup } = useAuth();

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('¡Passwords no coinciden!');
        }

        try {
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)
            console.log(currentUser);
        } catch (e) {
            setError('Error al crear usuario: ' + e.message)
            console.log(e);
        }
    }

    return (
        <Card className="w-75 mx-auto mt-5">
            <Card.Body>
                <h1>Sign Up</h1>
                { error ? <Alert variant="danger">{error}</Alert> : '' }
                { currentUser ? <Alert variant="success">{ currentUser.email }</Alert> : '' }
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={ emailRef } type="email" placeholder="Enter email" autoComplete="off" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={ passwordRef } type="password" placeholder="Password" autoComplete="off" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={ confirmPasswordRef } type="password" placeholder="Confirm password" autoComplete="off" required />
                    </Form.Group>

                    <Button className="w-100" variant="primary" type="submit">
                        Signup 
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Singup