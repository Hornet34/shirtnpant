import { UserActionTypes } from './user.types';

const IntitalState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const UserReducer = (state = IntitalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload, isLoading: false };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null };
        case UserActionTypes.SIGN_OUT_FAILED:
        case UserActionTypes.SIGN_UP_FAILED:
        case UserActionTypes.SIGN_IN_FAILED:
            return { ...state, error: payload, isLoading: false };

        default:
            return state;
    }
}

