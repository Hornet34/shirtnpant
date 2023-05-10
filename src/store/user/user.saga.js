import { put, call, all, takeLatest } from 'redux-saga/effects';
import { getCurrentUser, createUserDocumnet, signInWithGooglePopup, signInUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutListner } from '../../utilities/firebase/firebase';
import {
    signInFailed, signInSuccess, signOutFailed, signOutSuccess,
    signUpFailed, signUpSuccess, setCurrentUser, googleSignInStart, emailSignInStart, signUpStart, signOutStart
} from './user.slice';


function* getSnapShotFromCreateUserDocument(user, additionalDetails) {
    try {
        const snapShot = yield call(createUserDocumnet, user, additionalDetails)
        yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
    }
    catch (error) {
        yield put(signInFailed(error));
    }
}

function* isAuthenticated() {
    try {
        const user = yield call(getCurrentUser);
        if (!user) return;
        yield call(getSnapShotFromCreateUserDocument, user);
    }
    catch (error) {
        yield put(signInFailed(error));
    }
}

function* signInWithGoogle() {
    try {
        const respone = yield call(signInWithGooglePopup);
        yield call(getSnapShotFromCreateUserDocument, respone.user);
    }
    catch (error) {
        yield put(signInFailed(error));
        if (error.code === "auth/popup-closed-by-user") alert('Sign-in Failed, Popup Closed By User');
    }
}

function* signInWithEmail(action) {
    const { email, password } = action.payload
    try {
        const { user } = yield call(signInUserWithEmailAndPassword, email, password);
        yield call(getSnapShotFromCreateUserDocument, user);
    }
    catch (error) {
        yield put(signInFailed, error);
        switch (error.code) {
            case 'auth/user-not-found':
                alert('User Not Found');
                break;
            case 'auth/wrong-password':
                alert('Wrong Password');
                break;
            default:
                alert('Sign-in Failed');
                console.log(error.message);
        }
    }
}

function* signUp(action) {
    const { email, password, displayName } = action.payload;
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
        yield put(signUpSuccess({ user, displayName }));
    }
    catch (error) {
        yield put(signUpFailed(error));
        switch (error.code) {
            case "auth/email-already-in-use":
                alert('Email Already in Use');
                break;
            case "auth/weak-password":
                alert('Weak Password, Try Again');
                break;
            default:
                alert('Sign-up failed');
                console.log(error.message);
        }
    }
}

function* signOut() {
    try {
        yield call(signOutListner);
        yield put(signOutSuccess());
    }
    catch (error) {
        console.log('1')
        yield put(signOutFailed(error));
    }
}

function* signInAfterSignUp(action) {
    const { user, additionalDetails } = action.payload;
    yield call(getSnapShotFromCreateUserDocument, user, additionalDetails);
}

function* onGoogleSignInStart() {
    yield takeLatest(googleSignInStart().type, signInWithGoogle);
}

function* onEmailSignInStart() {
    yield takeLatest(emailSignInStart().type, signInWithEmail);
}

function* onSetCurrentUser() {
    yield takeLatest(setCurrentUser().type, isAuthenticated)
}

function* onSignUpStart() {
    yield takeLatest(signUpStart().type, signUp);
}

function* onSignUpSuccess() {
    yield takeLatest(signUpSuccess().type, signInAfterSignUp);
}

function* onSignOutStart() {
    yield takeLatest(signOutStart().type, signOut);
}

export function* userSagas() {
    yield all([call(onSetCurrentUser), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignUpStart), call(onSignUpSuccess), call(onSignOutStart)]);
}