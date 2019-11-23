import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  usersPage: usersReducer,
  auth: authReducer
});
let store = createStore(reducers);

window.store = store;

export default store;
