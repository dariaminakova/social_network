const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_ARIA = 'UPDATE-MESSAGE-ARIA';

let initialState = {
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
    newMessage: '',
};

const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessage
            };
            state.messagesObj.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_MESSAGE_ARIA:
            state.newMessage = action.newMessageText;
            return state;
        default:
            return state;
        }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageAriaCreator = (text) => {
    return ({type: UPDATE_MESSAGE_ARIA, newMessageText: text})
}

export default messageReducer;