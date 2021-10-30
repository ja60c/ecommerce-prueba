import { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar  } from 'react-bootstrap';
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
        <Navbar className="navbar" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand className="nav-brand" as={ Link } to="/">Magic Box Store 🔮</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={ Link } to="/">Products</Nav.Link>
            </Nav>
            
            <Nav className="ms-auto">
            <Form className="d-flex" style={{ marginRight:'1rem', maxWidth: '15rem' }}>
                <FormControl
                type="search"
                placeholder="Search"
                size="sm"
                aria-label="Search"
                />
                <Button variant="outline-light" size="sm" >Search</Button>
            </Form>

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
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar