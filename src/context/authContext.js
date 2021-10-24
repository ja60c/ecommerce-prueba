import { useContext, useEffect, useState, createContext } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from '../firebase' 

const authContext = createContext();
const firebaseAuth = getAuth(firebaseApp);

function useAuth() {
    return useContext(authContext)
}

function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState();
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            setCurrentUser(user);
        })
    })
 
    function signup(email, password){
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    return (
        <authContext.Provider value={{ currentUser, signup }}>
            {children}
        </authContext.Provider>
    );
}

export { useAuth, AuthProvider }