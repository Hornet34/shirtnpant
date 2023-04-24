import './sign-up-form.style.scss';
import { useState, useEffect } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumnet, getEmailList } from '../../utilities/firebase/firebase';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const onFocus = { email: false, displayName: false, password: false, confirmPassword: false };

var registeredMails;


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const [passwordAlert, setPasswordAlert] = useState('');
    const [nameAlert, setNameAlert] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const { displayName, email, password, confirmPassword } = formFields;
    const navigate = useNavigate();

    const checkEmailExists = (email) => {
        for (let mail of registeredMails) {
            if (email === mail) return true;
        }
        return false;
    }

    const getRegisteredMails = () => {
        const getEmailListsAsync = async () => {
            registeredMails = await getEmailList();
        }
        getEmailListsAsync();
    }

    useEffect(getRegisteredMails, []);


    const validatingPassword = () => {
        if (onFocus.password && password === '') {
            setPasswordAlert('Please Provide Password');
        }
        else if (onFocus.confirmPassword && confirmPassword === '') {
            setPasswordAlert('Please Confirm Password');
        }
        else if (confirmPassword !== '' && password !== confirmPassword) {
            setPasswordAlert('Password Does Not Match');
        }
        else if (confirmPassword !== '' && password === confirmPassword) {
            setPasswordAlert('');
        }
    }


    const validatingDisplayName = () => {
        if (onFocus.displayName && displayName === '') {
            setNameAlert('Please Provide A Name');
        }
        else if (displayName !== '' && displayName.length < 5) {
            setNameAlert('Name Should Be Greater Than 5 Characters')
        }
        else if (displayName.length >= 5) {
            setNameAlert('');
        }
    }


    const validatingEmail = () => {
        const checkIfEmailExists = (email) => {
            const exists = checkEmailExists(email);

            if (exists) {
                setEmailAlert('Email Already In Use');
            }
            else if (!exists) {
                setEmailAlert('');
            }
        }
        if (onFocus.email && email === '') {
            setEmailAlert('Please Provide An Email');
        }
        else if (onFocus.email) {
            checkIfEmailExists(email);
        }
    }

    useEffect(validatingPassword, [password, confirmPassword])

    useEffect(validatingDisplayName, [displayName])

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
        validatingDisplayName();
    }

    const resetForm = () => {
        setFormFields(defaultFormFields);
        for (const id in onFocus) onFocus[id] = false;
        setEmailAlert('');
        setPasswordAlert('');
        setNameAlert('');
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        if (passwordAlert.length > 0 || nameAlert.length > 0 || emailAlert.length > 0 || checkOnFocus()) {
            turnOnFocus();
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log('user created');
            await createUserDocumnet(user, { displayName });
            resetForm();
            getRegisteredMails();
            navigate('/');
        }
        catch (err) {
            switch (err.code) {
                case "auth/email-already-in-use":
                    alert('Email Already in Use');
                    break;
                case "auth/weak-password":
                    alert('Weak Password, Try Again');
                    break;
                default:
                    alert('Sign-up failed');
                    console.log(err.message);
            }

        }
    }


    return (
        <div className='sign-up-container'>

            <h2>SIGN UP</h2>
            <form onSubmit={handleOnSubmit}>
                <FormInput label='Name' type="text" id="displayName" onChange={handleChange} value={displayName} alertMessage={nameAlert} />
                <FormInput label='Email' type="email" id="email" onChange={handleChange} value={email} alertMessage={emailAlert} />
                <FormInput label='Password' type="password" id="password" onChange={handleChange} value={password} />
                <FormInput label='Confirm Password' type="password" id="confirmPassword" onChange={handleChange} value={confirmPassword} alertMessage={passwordAlert} />
                <div className='formbtn'>
                    <Button type="submit" >SIGN UP</Button>
                </div>

            </form>
        </div>
    );
}
export default SignUpForm;