import { Fragment, useState, useContext } from "react"
import { createAuthUserWithEmailAndPassowrd, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { HandelFormContext } from "../context/handel-form-errors.context"; 
import FormInput from "../from-input/form-input.component";
import {ButtonsContainer, H2, SignUpContainer} from './sign-up-form.style';
import Button from "../button/button.component";
import CreatedAccount from "../handel-form-input-errors/created-account.compnent";
import { useNavigate } from "react-router-dom";

const defalutFormFileds = {
    'displayName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
}


const SignUpFrom = () => {
    const [formFiled, setFormFiled] = useState(defalutFormFileds);
    const [localCreatedAccount, setLocalCreatedAccount] = useState(false);
    const {displayName, email, password, confirmPassword} = formFiled;
    const {setCreatedAccount, setCreatedAccountError} = useContext(HandelFormContext);
    const navigate = useNavigate();
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
    
    const resetFromFileds = () => {
        setFormFiled(defalutFormFileds)
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            setCreatedAccount(true);
            setCreatedAccountError('passwords don\'t match!');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassowrd(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFromFileds();
            setLocalCreatedAccount(true);
            navigate('/shop');
        }catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                setCreatedAccount(true);
                setCreatedAccountError('Eamil already in use!');
            }
            console.log(error.message);
        }     
    }

    const handelChange = (event) => {
        const { name, value } = event.target;

        setFormFiled({...formFiled, [name]: value});
    }
    return(
        <SignUpContainer>
            <H2>I don't have an account?</H2>
            {localCreatedAccount && <CreatedAccount msg={'Account Created!'}/>}
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
                <ButtonsContainer>
                    <Button type="submit" >Sign Up</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignUpFrom;