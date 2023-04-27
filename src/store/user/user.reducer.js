import { UserActionTypes } from './user.types';

const IntitalState = {
    currentUser: null
}

export const UserReducer = (state = IntitalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserActionTypes.Set_Current_User:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
}

