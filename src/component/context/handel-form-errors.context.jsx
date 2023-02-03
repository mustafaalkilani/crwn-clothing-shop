import { createContext, useState } from "react";

export const HandelFormContext = createContext({
    error: false,
    setError: () => null,
    errorType: '',
    setErrorType: () => null,
    createdAccount: false,
    setCreatedAccount: () => null,
    createdAccountError: '',
    setCreatedAccountError: () => null,
})

export const HandelFormProvider = ({children}) => {
    const [error, setError] = useState(false);
    const [errorType, setErrorType] = useState('');
    const [createdAccount, setCreatedAccount] = useState(false);
    const [createdAccountError, setCreatedAccountError] = useState(false);
    const value = {error, setError, errorType, setErrorType, createdAccount, setCreatedAccount, createdAccountError, setCreatedAccountError};

    return <HandelFormContext.Provider value={value}>{children}</HandelFormContext.Provider>

}