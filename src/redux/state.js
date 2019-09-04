// add and check post
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';


// add and check message
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_ARIA = 'UPDATE-MESSAGE-ARIA';

let store = {

// unchanged settings
    _state: {
        profilePage:{    
            postsObj: [ 
            {id: 0, text: 'Here', likesCount: 12},
            {id: 1, text: 'will', likesCount: 13},
            {id: 2, text: 'be', likesCount: 8},
            {id: 3, text: 'some', likesCount: 14},
            {id: 4, text: 'posts', likesCount: 9},
            {id: 5, text: 'from', likesCount: 17},
            {id: 6, text: 'your', likesCount: 21},
            {id: 7, text: 'users', likesCount: 5}
        ],
        friendsObj: [ 
            {id: 1, name: 'Rick'},
            {id: 2, name: 'Morty'},
            {id: 3, name: 'Joy'},
            {id: 4, name: 'Gerald'},
            {id: 5, name: 'Chris'},
            {id: 6, name: 'Peter'},
            {id: 7, name: 'Tony'},
            {id: 8, name: 'Eva'}
        ],
        newPostText: 'dasha',
    }, 
    
        messagesPage: {
            dialogsObj: [
                {id: 0, name: 'Rick'},
                {id: 1, name: 'Morty'},
                {id: 2, name: 'Joy'},
                {id: 3, name: 'Gerald'},
                {id: 4, name: 'Chris'},
                {id: 5, name: 'Peter'},
                {id: 6, name: 'Tony'},
                {id: 7, name: 'Eva'}
            ], 
        
            messagesObj: [
                {id: 0, message: 'Here'},
                {id: 1, message: 'will'},
                {id: 2, message: 'be'},
                {id: 3, message: 'some'},
                {id: 4, message: 'messages'},
                {id: 5, message: 'from'},
                {id: 6, message: 'your'},
                {id: 7, message: 'users'}
            ],
            newMessage: 'type your message',
        }
    },

    _callSubscriber () {
        console.log(1)
    },

// changed settings
    getState (){
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },


// dispatch for "Obj action" {type: обязательное свойство}
    dispatch (action) { 
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 10,
                text: this._state.profilePage.newPostText,
                likesCount: 8
            };
            this._state.profilePage.postsObj.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 1,
                message: this._state.messagesPage.newMessage
            };
            this._state.messagesPage.messagesObj.push(newMessage);
            this._state.messagesPage.newMessage = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-MESSAGE-ARIA'){
            this._state.messagesPage.newMessage = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewTextActionCreator = (text) => {
    return {type: UPDATE_NEW_TEXT, newText: text}
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateMessageAriaActionCreator = (text) => {
    return {type: UPDATE_MESSAGE_ARIA, newMessageText: text}
}

export default store;
window.store = store;
