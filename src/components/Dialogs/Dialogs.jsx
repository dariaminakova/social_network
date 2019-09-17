import React from 'react';
import style from '../../component-styles/Dialogs.module.css';

import {sendMessageCreator, updateMessageAriaCreator} from '../../redux/messageReducer';

import MessageItem from './Message/Message';
import DialogUser from './DialogUser/DialogUser';

const Dialogs = (props) => {
    let dialogsUsers = props.messagesPage.dialogsObj.map((d) => {
        return <DialogUser name={d.name} id={d.id} />
    });
    let messageUsers = props.messagesPage.messagesObj.map((m) => {
        return <MessageItem message={m.message} />
    });

    let sendMessage = () => {
    props.dispatch(sendMessageCreator());
    }

    let onMessageAriaChange = (e) =>{
    let text = e.target.value;
    props.dispatch(updateMessageAriaCreator(text));

    }

    return (
        <div className={style.dialogs}>
            <div>
                <ul>
                    {dialogsUsers}
                </ul>
            </div>
            <div>
                {messageUsers}
                <div>
                    <textarea 
                    className={style.dialogs} 
                    placeholder = 'type your message'
                    onChange = {onMessageAriaChange}
                    value = {props.messagesPage.newMessage}/>
                    <button onClick = {sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
}; 

export default Dialogs;