import { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [ error, setError ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ loading, setLoading ] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email to change your password')
            setLoading(false);
        } catch (e) {
            setError('Cannot change password: ' + e.message)
            setLoading(false)
            console.log(e);
        }
    }

    return (
        <>
        <NavigationBar />
        <Card className="w-75 mx-auto mt-5">
            <Card.Body>
                <h1 className="display-4 text-center my-3">Password Reset</h1>
                { error && error !== '' && <Alert variant="danger">{ error }</Alert> }
                { message && message !== '' && <Alert variant="success">{ message }</Alert> }
                <Form onSubmit={ handleSubmit }>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={ emailRef } type="email" placeholder="Enter email" autoComplete="off" required />
                    </Form.Group>
                    <Button className="w-100" variant="primary" type="submit" disabled={ loading }>
                        Reset password 
                    </Button>
                </Form>
                <Card.Text className="text-muted text-center my-3">
                    <Link style={{ fontSize: "14px" }}  to="/login">Login</Link>
                </Card.Text>
                <Card.Text style={{ fontSize: "14px" }} className="text-muted text-center my-3">
                    Need an account? <Link to="/signup">Signup</Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default ForgotPassword;