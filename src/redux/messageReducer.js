const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_ARIA = 'UPDATE-MESSAGE-ARIA';

const messageReducer = (state, action) => {
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
    return {type: UPDATE_MESSAGE_ARIA, newMessageText: text}
}

export default messageReducer;