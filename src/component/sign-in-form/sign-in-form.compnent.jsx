import { Fragment, useState, useContext } from 'react';

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import Button, {buttonTypeClassName} from '../button/button.component';
import { HandelFormContext } from '../context/handel-form-errors.context';
import {Group, ButtonsContainer} from './form-input.style';
import FormInput from '../from-input/form-input.component';
import { useNavigate } from 'react-router-dom';
import  HandelErrorElement  from '../handel-form-input-errors/handel-sign-in-errors.component';


const defaultInputValues = {
    'email': '',
    'password': ''
}
const SignInForm = () => {
    const [inputValue, setInputValue] = useState(defaultInputValues);
    const {email, password} = inputValue;
    const {error, setError, setErrorType} = useContext(HandelFormContext);    
    const navigate = useNavigate();

    const InputFileds = [
        {
            'id': '1',
            'label': 'Email',
            'name': 'email',
            'type': 'email',
            'value': email,
            'len': '2',
        },
        {
            'id': '2',
            'label': 'Password',
            'name': 'password',
            'type': 'password',
            'value': password,
            'len': '8',
        },
    ]

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        navigate('/shop');
    }

    const resetFromFileds = () => {
        setInputValue(defaultInputValues);
    }
    const handelSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFromFileds();
            navigate('/shop');
        }catch (error) {
            switch(error.code) {
                case 'auth/user-not-found':
                    setError(true);
                    setErrorType('User Not Found!');
                    break;    
                case 'auth/wrong-password':
                    setError(true);
                    setErrorType('Wrong Email Or Password!');
                    break
                case 'auth/network-request-failed':
                    setError(true);
                    setErrorType('Check Your Internet!');
                    break
                case 'auth/too-many-requests':
                    setError(true);
                    setErrorType('Too many failed attempts!');
                    break
                default:
                    setError(true);
                    setErrorType('Please Try Again Later!');
                    console.log(error.message);

            }
        }
    }
    const handelChange = (event) => {
        const { name, value } = event.target;

        setInputValue({...inputValue, [name]: value})
    }
    return (
        <div className='sign-up-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and passowrd</span>
            {error && < HandelErrorElement />}
            <form onSubmit={handelSubmit}>
            <Group>
                {
                    InputFileds.map(({id, label, name, type, value, len}) => {
                        return (
                            <Fragment key={id}>
                                <FormInput name={name} type={type} value={value} len={len} label={label} handelChange={handelChange}/>
                            </Fragment>
                        )
                    })
                }
            </Group> 
            <ButtonsContainer className='buttons-container'>
                <Button type='submit'>Sign IN</Button>
                <Button type='button' buttonType={buttonTypeClassName.google} onClick={logGoogleUser}>Sign In with google</Button>
            </ButtonsContainer>
            </form>
        </div>
    )
}

export default SignInForm;