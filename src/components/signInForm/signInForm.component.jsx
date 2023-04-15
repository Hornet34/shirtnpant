import './signInForm.style.scss';
import { useState, useEffect } from "react";
import FormInput from '../formInput/formInput.component';
import Button from '../button/button.component';
import SignInGoogle from '../signInGoogle/signInGoogle.component';
import { signInUserWithEmailAndPassword } from '../../utilities/firebase/firebase';

const defaultFormFields = {
    email: '',
    password: '',
}
const onFocus = { email: false, password: false };

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const [passwordAlert, setPasswordAlert] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const { email, password } = formFields;


    const validatingPassword = () => {
        if (onFocus.password && password === '') {
            setPasswordAlert('Please Provide Password');
        }
        else setPasswordAlert('');
    }



    const validatingEmail = () => {
        if (onFocus.email && email === '') {
            setEmailAlert('Please Provide An Email');
        }
        else setEmailAlert('');
    }

    useEffect(validatingPassword, [password])

    useEffect(validatingEmail, [email])

    const handleChange = (event) => {
        const { id, value } = event.target;
        onFocus[id] = true;
        setFormFields({ ...formFields, [id]: value })
    }

    const checkOnFocus = () => {
        for (const id in onFocus) {
            if (onFocus[id] === false) {
                return true;
            }
        }
        return false;
    }

    const turnOnFocus = () => {
        for (const id in onFocus) onFocus[id] = true;
        validatingEmail();
        validatingPassword();
    }

    const resetForm = () => {
        setFormFields(defaultFormFields);
        for (const id in onFocus) onFocus[id] = false;
        setEmailAlert('');
        setPasswordAlert('');
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        if (passwordAlert.length > 0 || emailAlert.length > 0 || checkOnFocus()) {
            turnOnFocus();
            return;
        }

        try {
            const user = await signInUserWithEmailAndPassword(email, password);
            console.log(user);
            resetForm();
        }
        catch (err) {
            console.log(err.code);
        }
    }


    return (
        <div className='sign-in-container'>

            <h2>SIGN IN</h2>
            <form onSubmit={handleOnSubmit}>
                <FormInput label='Email' type="email" id="email" onChange={handleChange} value={email} alertMessage={emailAlert} />
                <FormInput label='Password' type="password" id="password" onChange={handleChange} value={password} alertMessage={passwordAlert} />
                <div className='signup-prompt'><span>Don't have an account?  </span><a href='/signUp'>register</a></div>

                <div className='formbtn'>
                    <Button type="submit" >SIGN IN</Button>
                    <p>or</p>
                    <SignInGoogle />
                </div>
            </form>
        </div>
    );
}
export default SignInForm;