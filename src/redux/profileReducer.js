const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

const profileReducer = (state, action) =>{
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 10,
                text: state.newPostText,
                likesCount: 8
            };
            state.postsObj.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewTextCreator = (text) => {
    return {type: UPDATE_NEW_TEXT, newText: text}
}

export default profileReducer;