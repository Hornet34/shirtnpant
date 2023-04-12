import { signInWithGooglePopup, createUserDocumnet } from "../../utilities/firebase/firebase";

const SignIN = () => {
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
        <div>
            <h1>I am Sign in</h1>
            <button onClick={googleUser}>Sign In</button>
        </div>
    );
}

export default SignIN;