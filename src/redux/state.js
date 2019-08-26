import { rerenderEntireTree } from "../render";

let state = {
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
        ]
    }
}

export function addPost (postMessage) {
    let newPost ={
        id: 10,
        text: postMessage,
        likesCount: 10
    };

    state.profilePage.postsObj.push(newPost);
    rerenderEntireTree(state);
};

export default state;