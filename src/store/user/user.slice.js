import { createSlice } from "@reduxjs/toolkit";

const IntitalState = {
    currentUser: null,
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: IntitalState,
    reducers: {
        setCurrentUser(state, action) {
            state.isLoading = true;
        },
        signInSuccess(state, action) {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        signInFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        googleSignInStart(state, action) {
            state.isLoading = true;
        },
        emailSignInStart(state, action) {
            state.isLoading = true;
        },
        signUpStart(state, action) {
            state.isLoading = true;
        },
        signUpFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        signUpSuccess(state, action) {
            state.isLoading = true;
        },
        signOutStart(state, action) {
            state.isLoading = true;
        },
        signOutFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        signOutSuccess(state, action) {
            state.currentUser = null;
            state.isLoading = false;
        }
    }
})

export const { setCurrentUser, signInSuccess, signInFailed, googleSignInStart, emailSignInStart,
    signUpStart, signUpFailed, signUpSuccess, signOutStart, signOutSuccess, signOutFailed } = userSlice.actions;
export const UserReducer = userSlice.reducer;
