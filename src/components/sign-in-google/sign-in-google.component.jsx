import Button, { buttonTypeClasses } from '../button/button.component';
import { googleSignInStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const SignInGoogle = () => {
    const dispatch = useDispatch();
    const googleUser = () => dispatch(googleSignInStart());
    const navigate = useNavigate;
    navigate('');
    return (
        <Button type="button" buttonType={buttonTypeClasses.google} onClick={googleUser}>GOOGLE SIGN IN</Button>
    );
}

export default SignInGoogle;