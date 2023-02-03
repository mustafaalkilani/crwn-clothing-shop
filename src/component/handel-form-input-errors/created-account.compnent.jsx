import { useContext } from 'react';
import { HandelFormContext } from '../context/handel-form-errors.context';
import {ErrorMsg, Msg} from './created-account.style';

const CreatedAccount = ({msg}) => {
    const {createdAccount, createdAccountError} = useContext(HandelFormContext);
    return(
        <>
        {
        createdAccount ? <ErrorMsg>{createdAccountError}</ErrorMsg>
        :
        <Msg>{msg}</Msg>
        }
        </>
    )
}

export default CreatedAccount;