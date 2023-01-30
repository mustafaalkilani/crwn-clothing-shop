import {BaseButton, GoogleSignInButton, InvertedButton} from './button.style';

export const buttonTypeClassName = {
    'base': 'base',
    'google': 'google-sign-in',
    'inverted': 'inverted',
};

const ButtonTypeHandel = (buttonType = buttonTypeClassName.base) => (
    {
        [buttonTypeClassName.base]: BaseButton,
        [buttonTypeClassName.google]: GoogleSignInButton,
        [buttonTypeClassName.inverted]: InvertedButton,

    }[buttonType]
);

const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = ButtonTypeHandel(buttonType); 
    return(
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}

export default Button;