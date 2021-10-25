import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function NavigationBar() {
    const { currentUser, logout } = useAuth();
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState('');
    const history = useHistory();

    async function handleLogout(e){
        try {
            setError('')
            setLoading(true)
            await logout()
            history.push('/login');
        } catch (e) {
            setError('Error: ' + e.message)
            setLoading(false)
            console.log(e);
        }
    }

    return (
        <Navbar bg="primary" variant="dark" expand="md">
        <Container>
            <Navbar.Brand>Magic Box Store 🔮</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={ Link } to="/">Products</Nav.Link>
            {
                currentUser
                ? <Nav.Link as={ Link } to="/profile">Profile</Nav.Link>
                : ''
            }
            </Nav>
            <Nav className="ms-auto">
            {
                currentUser
                ? <Navbar.Text className="">Signed in as: {currentUser.email}</Navbar.Text>
                : <Nav.Link as={ Link } to="/login">Login</Nav.Link>
            }
            {
                currentUser
                ? <Nav.Link as={ Link } to="/login" onClick={ handleLogout }>Logout</Nav.Link>
                : <Nav.Link as={ Link } to="/signup">Signup</Nav.Link>
            }     
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar