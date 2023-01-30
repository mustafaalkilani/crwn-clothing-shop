import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedLisnter, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsub = onAuthStateChangedLisnter((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsub;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}