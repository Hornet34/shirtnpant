import { signInWithGooglePopup } from "../../utilities/firebase/firebase";

const SignIN = () => {
    const googleUser = async () => {
        const respone = await signInWithGooglePopup();
        console.log(respone);
    }
    return (
        <div>
            <h1>I am Sign in</h1>
            <button onClick={googleUser}>Sign In</button>
        </div>
    );
}

export default SignIN;