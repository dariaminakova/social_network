import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT = "UPDATE-NEW-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 0, text: "Here", likesCount: 12 },
    { id: 1, text: "will", likesCount: 13 },
    { id: 2, text: "be", likesCount: 8 },
    { id: 3, text: "some", likesCount: 14 },
    { id: 4, text: "posts", likesCount: 9 },
    { id: 5, text: "from", likesCount: 17 },
    { id: 6, text: "your", likesCount: 21 },
    { id: 7, text: "users", likesCount: 5 },
  ],
  friends: [
    { id: 1, name: "Rick" },
    { id: 2, name: "Morty" },
    { id: 3, name: "Joy" },
    { id: 4, name: "Gerald" },
    { id: 5, name: "Chris" },
    { id: 6, name: "Peter" },
    { id: 7, name: "Tony" },
    { id: 8, name: "Eva" },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 10,
        text: state.newPostText,
        likesCount: 8,
      };
      return { ...state, newPostText: "", posts: [...state.posts, newPost] };
    case UPDATE_NEW_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewTextCreator = (text) => {
  return { type: UPDATE_NEW_TEXT, newText: text };
};

// work with profile
const _setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const userProfile = (userId) => {
  return (dispatch) => {
    profileAPI.setUserProfile(userId).then((response) => {
      dispatch(_setUserProfile(response));
    });
  };
};

//work with status profile

const _setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId).then((response) => {
      dispatch(_setStatus(response));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status).then((response) => {
      if (response.resultCode === 0) {
        dispatch(_setStatus(status));
      }
    });
  };
};

export default profileReducer;
