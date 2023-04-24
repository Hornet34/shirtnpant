import { signInWithGooglePopup, createUserDocumnet } from "../../utilities/firebase/firebase";
import Button from '../button/button.component';

import { useNavigate } from 'react-router-dom';

const SignInGoogle = () => {
    const navigate = useNavigate();
    const googleUser = async () => {
        try {
            const respone = await signInWithGooglePopup();
            await createUserDocumnet(respone.user);
            navigate('/');

        }
        catch (err) {
            if (err.code === "auth/popup-closed-by-user") alert('Sign-in Failed, Popup Closed By User');
            else {
                alert('Sign in Failed');
                console.log(err.message)
            }

        }

    }
    return (
        <Button type="button" buttonType='google' onClick={googleUser}>GOOGLE SIGN IN</Button>
    );
}

export default SignInGoogle;