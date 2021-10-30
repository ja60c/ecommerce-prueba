import { AuthProvider } from './context/authContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Products from './components/Products';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/profile" component={ Profile }/>
          <PrivateRoute exact path="/update-profile" component={ UpdateProfile }/>
          <Route path="/signup" component={ Signup }/>
          <Route path="/login" component={ Login }/>
          <Route path="/forgot-password" component={ ForgotPassword }/>
          <Route path="/" component={ Products }/> 
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;