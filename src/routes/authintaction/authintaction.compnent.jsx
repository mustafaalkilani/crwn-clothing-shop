
import SignUpFrom from '../../component/sign-up-form/sign-up-form.component';
import SignInForm from '../../component/sign-in-form/sign-in-form.compnent';

import './authintaction.style.scss';

const Auth = () => {
    return (
        <div className='authintaction-container'>
            <SignInForm />
            <SignUpFrom />
        </div>
    )
}

export default Auth;