import { Fragment, useState } from "react"

import { createAuthUserWithEmailAndPassowrd, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../from-input/form-input.component";
import './sign-up-form.style.scss';
import Button from "../button/button.component";

const defalutFormFileds = {
    'displayName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
}


const SignUpFrom = () => {
    const [formFiled, setFormFiled] = useState(defalutFormFileds);
    const {displayName, email, password, confirmPassword} = formFiled;

    const inputFileds = [
        {
            'id': '1',
            'label': 'Display Name',
            'name': 'displayName',
            'type': 'text',
            'value': displayName,
            'len': '2',
        },
        {
            'id': '2',
            'label': 'Email',
            'name': 'email',
            'type': 'email',
            'value': email,
            'len': '2',
        },
        {
            'id': '3',
            'label': 'Password',
            'name': 'password',
            'type': 'password',
            'value': password,
            'len': '8',
        },
        {
            'id': '4',
            'label': 'Confirm Password',
            'name': 'confirmPassword',
            'type': 'password',
            'value': confirmPassword,
            'len': '8',
        },
    ]
    
    // console.log(formFiled);

    const resetFromFileds = () => {
        setFormFiled(defalutFormFileds)
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassowrd(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFromFileds();
        }catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, Email already in use')
            }
            console.log(error.message);
        }     
    }

    const handelChange = (event) => {
        const { name, value } = event.target;

        setFormFiled({...formFiled, [name]: value});
    }
    return(
        <div className="sign-up-container">
            <h2>I don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handelSubmit}>
                {
                    inputFileds.map(({id, label, value, name, type, len}) => {
                        return (
                            <Fragment key={id}>
                                <FormInput handelChange={handelChange} label={label} value={value} name={name} type={type} len={len}/>
                            </Fragment>
                        )
                    })
                }
                <Button type="submit" >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpFrom;