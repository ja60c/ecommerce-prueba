import { useRef, useState } from 'react';
import { Alert, Button, Card, Form, InputGroup, Row, FormControl } from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link, useHistory } from 'react-router-dom';
import NavigationBar from './NavigationBar';

function UpdateProfile() {
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
                <h1 className="display-4 text-center my-3">Update profile</h1>
                { error && error !== '' && <Alert variant="danger">{error}</Alert> }
                <Form onSubmit={ handleSubmit }>
                    <Row>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Username
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" placeholder="Username" />
                        </InputGroup>
                    </Row>
                    <Row>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Upload a profile image
                        </Form.Label>
                        <Form.Group>
                            <Form.File id="select" />
                        </Form.Group>
                    </Row><br />
                    <Button as={ Link } to="/" className="w-100" variant="primary" type="submit" disabled={ loading }>
                            Update 
                    </Button>
                    <Card.Text className="text-muted text-center my-3">
                        <Link to="/profile">Back to profile</Link>
                    </Card.Text>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}

export default UpdateProfile;