import { UserActionTypes } from "./user.types";
import { createAction } from '../../utilities/reducer/reducer';

export const setCurrentUser = (user) => createAction(UserActionTypes.Set_Current_User, user);