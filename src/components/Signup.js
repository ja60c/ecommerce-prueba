import { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link, useHistory } from 'react-router-dom';
import NavigationBar from './NavigationBar';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState('');
    const { signup } = useAuth();
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Passwords do not match');
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/login')
        } catch (e) {
            setError('Cannot create user: ' + e.message)
            setLoading(false)
            console.log(e);
        }
    }

    return (
        <>
        <NavigationBar />
        <Card className="w-75 mx-auto mt-5">
            <Card.Body>
                <h1 className="display-4 text-center my-3">Sign Up</h1>
                { error && error !== '' && <Alert variant="danger">{error}</Alert> }
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

                    <Button className="w-100" variant="primary" type="submit" disabled={ loading }>
                        Signup 
                    </Button>
                </Form>
                <Card.Text className="text-muted text-center my-3">
                    <Link to="/login">Login</Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Signup;