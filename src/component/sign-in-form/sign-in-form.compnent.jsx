import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';
import './form-input.style.scss';
import FormInput from '../from-input/form-input.component';

import { Fragment, useState } from 'react';

const defaultInputValues = {
    'email': '',
    'password': ''
}

const SignInForm = () => {
    const [inputValue, setInputValue] = useState(defaultInputValues);
    const {email, password} = inputValue;
    

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
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    const resetFromFileds = () => {
        setInputValue(defaultInputValues);
    }
    const handelSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFromFileds();
        }catch (error) {
            switch(error.code) {
                case 'auth/user-not-found':
                    alert('user not found');
                    break
                case 'auth/wrong-password':
                    alert('wrong email or password !');
                    break
                default:
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
            <form onSubmit={handelSubmit}>
            <div className="group">
                {
                    InputFileds.map(({id, label, name, type, value, len}) => {
                        return (
                            <Fragment key={id}>
                                <FormInput name={name} type={type} value={value} len={len} label={label} handelChange={handelChange}/>
                            </Fragment>
                        )
                    })
                }
            </div> 
            <div className='buttons-container'>
                <Button type='submit'>Sign IN</Button>
                <Button type='button' buttonType='google' onClick={logGoogleUser}>Sign In with google</Button>
            </div>
            </form>
        </div>
    )
}

export default SignInForm;