import { createContext } from "react";
import { getAuth } from "firebase/auth";

const authContext = createContext();

function AuthProvider({ children }) {

    function signup(email, password){
        return getAuth.createUserWithEmailAndPassword(email, password)
    }

    return (
        <authContext.Provider value="">
            {children}
        </authContext.Provider>
    );
}

export { authContext, AuthProvider }