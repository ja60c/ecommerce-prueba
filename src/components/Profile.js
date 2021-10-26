import { useState } from 'react';
import { Alert, Button, Card, Image } from 'react-bootstrap';
import { useAuth } from '../context/authContext';
import { Link, useHistory } from 'react-router-dom';
import NavigationBar from './NavigationBar';

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
            setError('Error: ' + e.message)
            setLoading(false)
            console.log(e);
        }
    }

    return (
        !loading && 
        <>
        <NavigationBar />
        <Card className="w-75 mx-auto mt-5">
            <Card.Body>
                {
                !loading && currentUser.photoURL && <div style={{ width: '200px', height: '200px', margin: '0 auto'}}>
                    <Image style={{ objectFit: 'cover', objectPosition: 'center'}} className="w-100 h-100 border border-2 border-secondary p-1" src={ currentUser.photoURL } roundedCircle />
                    </div>
                }
                {
                    currentUser.displayName
                    ? <h1 className="display-4 text-center my-3">{ currentUser.displayName }</h1>
                    : <h1 className="display-4 text-center my-3">Profile</h1>
                }
                { error && <Alert variant="danger">{error}</Alert> }
                {/* <h1 className="display-5 text-center">My Profile</h1>
                { error && error !== '' && <Alert variant="danger">{error}</Alert> } */}
                <Card.Text className="lead text-center my-3">
                    Email: { currentUser.email }
                </Card.Text>
                <Button as={ Link } to="/update-profile" className="w-100" variant="primary" type="submit" disabled={ loading }>
                        Update profile 
                </Button>
                <Card.Text className="text-muted text-center my-3">
                    <Link to="/login" onClick={ handleLogout }>Logout</Link>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Profile;