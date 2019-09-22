const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

let initialState = {    
    posts: [ 
        {id: 0, text: 'Here', likesCount: 12},
        {id: 1, text: 'will', likesCount: 13},
        {id: 2, text: 'be', likesCount: 8},
        {id: 3, text: 'some', likesCount: 14},
        {id: 4, text: 'posts', likesCount: 9},
        {id: 5, text: 'from', likesCount: 17},
        {id: 6, text: 'your', likesCount: 21},
        {id: 7, text: 'users', likesCount: 5}
    ],
    friends: [ 
        {id: 1, name: 'Rick'},
        {id: 2, name: 'Morty'},
        {id: 3, name: 'Joy'},
        {id: 4, name: 'Gerald'},
        {id: 5, name: 'Chris'},
        {id: 6, name: 'Peter'},
        {id: 7, name: 'Tony'},
        {id: 8, name: 'Eva'}
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 10,
                text: state.newPostText,
                likesCount: 8
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewTextCreator = (text) => {
    return {type: UPDATE_NEW_TEXT, newText: text}
}

export default profileReducer;