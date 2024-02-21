import { combineReducers } from "redux";
import userReducer from "./User/Slice";

export default combineReducers({
    user: userReducer,
})