import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles.jsx';

export const buttonTypeClasses = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = buttonTypeClasses.base) => (
    {
        [buttonTypeClasses.base]: BaseButton,
        [buttonTypeClasses.google]: GoogleSignInButton,
        [buttonTypeClasses.inverted]: InvertedButton
    }[buttonType]
)
const Button = (props) => {
    const { children, buttonType, ...otherOptions } = props;
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherOptions}>{children}</CustomButton>
    );
}

export default Button;