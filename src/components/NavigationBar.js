import { useState } from 'react';
import { Button, Container, Form, FormControl, Image, Nav, Navbar  } from 'react-bootstrap';
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
            </Nav>
            <Nav className="ms-auto">
            { 
                currentUser
                ? <Navbar.Text className="">Hello, <Link to="/profile">{currentUser.displayName}</Link>!</Navbar.Text>
                : <Nav.Link as={ Link } to="/login">Login</Nav.Link>
            }
            {/* {
                !loading && currentUser.photoURL && <div style={{ width: '50px', height: '50px', margin: '0 auto'}}>
                <Image style={{ objectFit: 'cover', objectPosition: 'center'}} className="w-100 h-100 border border-2 border-secondary p-1" src={ currentUser.photoURL } roundedCircle />
                </div>
            } */}
            {
                currentUser
                ? <Nav.Link as={ Link } to="/login" onClick={ handleLogout }>Logout</Nav.Link>
                : <Nav.Link as={ Link } to="/signup">Signup</Nav.Link>
            }     
            </Nav>
            <Form className="d-flex vw-20">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-auto"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar