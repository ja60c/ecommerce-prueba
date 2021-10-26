import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';

function Cards(props) {
    const { currentUser } = useAuth();
    const { product, description, image } = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ image } />
            <Card.Body>
                <Card.Title>{ product } </Card.Title>
                <Card.Text>{ description }</Card.Text>
                {
                currentUser
                ? <Button variant="primary" size="sm">Comprar</Button>
                : <Button variant="primary" size="sm"disabled>Comprar</Button>
                }
                {
                currentUser
                ? <Card.Link className="ms-auto" as={ Link } to="/login">Login</Card.Link>
                : ''
                }
                {
                currentUser
                ? ''
                : <Card.Link as={ Link } to="/signup">Signup</Card.Link>
                }
            </Card.Body>
        </Card>
    )
}

export default Cards