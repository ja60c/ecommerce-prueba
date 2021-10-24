import { useState } from 'react';
import { Alert, Card } from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link, useHistory } from 'react-router-dom';


function Profile() {
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
            setError('Error al cerrar sesión: ' + e.message)
            setLoading(false)
            console.log(e);
        }
    }

    return (
        !loading && <Card className="w-75 mx-auto mt-5">
            <Card.Body>
                <h1 className="display-5 text-center">Login</h1>
                { error && error !== '' && <Alert variant="danger">{error}</Alert> }
                <Card.Text className="lead text-center my-3">
                    Email: { currentUser.email }
                </Card.Text>
                <Card.Text className="text-muted text-center my-3">
                    <Link to="/login" onClick={ handleLogout }>Cerrar sesión</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Profile;