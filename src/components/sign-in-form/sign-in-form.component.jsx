import { SignInContainer, H2, A, SignUpPrompt, FormBtn } from './sign-in-form.style.jsx';
import { useState, useEffect } from "react";
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import SignInGoogle from '../sign-in-google/sign-in-google.component';
import { useNavigate } from 'react-router-dom';
import { emailSignInStart } from '../../store/user/user.action.js';
import { useDispatch } from 'react-redux';

const defaultFormFields = {
    email: '',
    password: '',
}
const onFocus = { email: false, password: false };

const SignInForm = () => {

    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const [passwordAlert, setPasswordAlert] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const { email, password } = formFields;
    const navigate = useNavigate();


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
        dispatch(emailSignInStart(email, password));
        resetForm();
    }


    return (
        <SignInContainer>

            <H2>SIGN IN</H2>
            <form onSubmit={handleOnSubmit}>
                <FormInput label='Email' type="email" id="email" onChange={handleChange} value={email} alertMessage={emailAlert} />
                <FormInput label='Password' type="password" id="password" onChange={handleChange} value={password} alertMessage={passwordAlert} />
                <SignUpPrompt><span>Don't have an account?  </span><A href='/signUp'>register</A></SignUpPrompt>

                <FormBtn>
                    <Button type="submit" >SIGN IN</Button>
                    <p>or</p>
                    <SignInGoogle />
                </FormBtn>
            </form>
        </SignInContainer>
    );
}
export default SignInForm;