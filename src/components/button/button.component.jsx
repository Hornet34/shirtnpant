import './button.styles.scss';

const buttonClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
}
const Button = (props) => {
    const { children, buttonType, ...otherOptions } = props;
    return (
        <button className={`button-container ${buttonClasses[buttonType]}`} {...otherOptions}>{children}</button>
    );
}

export default Button;