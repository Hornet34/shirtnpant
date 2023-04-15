import { signInWithGooglePopup, createUserDocumnet } from "../../utilities/firebase/firebase";
import Button from '../button/button.component';

const SignInGoogle = () => {
    const googleUser = async () => {
        try {
            const respone = await signInWithGooglePopup();
            await createUserDocumnet(respone.user);
        }
        catch (err) {
            console.log('sign in with google failed', err.message)
        }

    }
    return (
        <Button type="button" buttonType='google' onClick={googleUser}>SIGN IN With Google</Button>
    );
}

export default SignInGoogle;