import './button.style.scss';

const buttonTypeClassName = {
    google: 'google-sing-in',
    inverted: 'inverted',
};

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${buttonTypeClassName[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;