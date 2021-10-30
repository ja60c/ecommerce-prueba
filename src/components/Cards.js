import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import CardModal from './CardModal';

function Cards(props) {
    const { currentUser } = useAuth();
    const { product, description, image } = props;

    return (
        <Card className="card-products">
            <Card.Img className="card-image" src={ image } />
            <Card.Body>
                <Card.Title className="card-title" >{ product } </Card.Title>
                <Card.Text className="card-text">{ description }</Card.Text>
                <CardModal />
            </Card.Body>
        </Card>
    )
}

export default Cards