import { authAPI } from "API/api";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: userId,
  email,
  login,
});

export const AuthUser = () => {
  return (dispatch) => {
    authAPI.authMe().then((response) => {
      if (response.data.resultCode !== 0) {
        const { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};
export default authReducer;
