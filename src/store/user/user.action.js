import { UserActionTypes } from "./user.types";
import { createAction } from '../../utilities/reducer/reducer';

export const setCurrentUser = (user) => createAction(UserActionTypes.Set_Current_User, user);

export const googleSignInStart = () => createAction(UserActionTypes.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => createAction(UserActionTypes.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) => createAction(UserActionTypes.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) => createAction(UserActionTypes.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) => createAction(UserActionTypes.SIGN_UP_START, { email, password, displayName });

export const signUpFailed = (error) => createAction(UserActionTypes.SIGN_UP_FAILED, error);

export const signUpSuccess = (user, additionalDetails) => createAction(UserActionTypes.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signOutStart = () => createAction(UserActionTypes.SIGN_OUT_START);

export const signOutFailed = (error) => createAction(UserActionTypes.SIGN_OUT_FAILED, error);

export const signOutSuccess = () => {
    return createAction(UserActionTypes.SIGN_OUT_SUCCESS);
}

