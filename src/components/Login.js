import { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link, useHistory } from 'react-router-dom';


function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState('');
    const { signup } = useAuth();
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/login')
        } catch (e) {
            setError('Error al crear usuario: ' + e.message)
            setLoading(false)
            console.log(e);
        }
    }

    return (
        <Card className="w-75 mx-auto mt-5">
            <Card.Body>
                <h1>Login</h1>
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

                    <Button className="w-100" variant="primary" type="submit" disabled={ loading }>
                        Login 
                    </Button>
                </Form>
                <Card.Text className="text-muted text-center my-3">
                    ¿Necesitas una cuenta? <Link to="/signup">Regístrate aquí</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Login;