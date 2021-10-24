import { useContext, useEffect, useState, createContext } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseApp } from '../firebase' 

const authContext = createContext();

function useAuth() {
    return useContext(authContext)
}

function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState();
    const [ loading, setLoading ] = useState(true);

    const firebaseAuth = getAuth(firebaseApp);

    useEffect(() => {
        return onAuthStateChanged(firebaseAuth, user => {
            setCurrentUser(user);
            setLoading(false);
        });
    });
 
    function signup(email, password){
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    function logout(){
        return signOut(firebaseAuth)
    }

    return (
        <authContext.Provider value={{ currentUser, signup, login, logout }}>
            { !loading && children }
        </authContext.Provider>
    );
}

export { useAuth, AuthProvider }