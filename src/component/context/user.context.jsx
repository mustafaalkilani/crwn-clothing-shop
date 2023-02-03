import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedLisnter, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { USER_ACTION_TYPES } from "../../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});


const INTIAL_STATE_VALUE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled action type "${type}" in userReducer`);
    }
}

export const UserProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INTIAL_STATE_VALUE);

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }
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