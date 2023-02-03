import { useContext } from 'react';
import { HandelFormContext } from '../context/handel-form-errors.context';
import {ErrorMsg} from './handel-sign-in-errors.style';

const HandelErrorElement = () => {
    const {errorType} = useContext(HandelFormContext);
    return( <ErrorMsg>{errorType}</ErrorMsg>
)
}

export default HandelErrorElement;