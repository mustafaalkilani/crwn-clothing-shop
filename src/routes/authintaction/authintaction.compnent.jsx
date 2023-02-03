import SignUpFrom from '../../component/sign-up-form/sign-up-form.component';
import SignInForm from '../../component/sign-in-form/sign-in-form.compnent';
import {AuthintactionContainer} from './authintaction.style';

const Auth = () => {
    return (
        <AuthintactionContainer>
            <SignInForm />
            <SignUpFrom />
        </AuthintactionContainer>
    )
}

export default Auth;