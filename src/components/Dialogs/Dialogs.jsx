import React, {Component} from 'react';
import style from '../../component-styles/Dialogs.module.css';

import {sendMessageCreator, updateMessageAriaCreator} from '../../redux/messageReducer';

import MessageItem from './Message/Message';
import DialogUser from './DialogUser/DialogUser';

class Dialogs extends Component {
    render(){
       const {messagesPage, dispatch} = this.props;

       let dialogsUsers = messagesPage.dialogsObj.map((d) => {
           return <DialogUser name={d.name} id={d.id} />
       });
       let messageUsers = messagesPage.messagesObj.map((m) => {
           return <MessageItem message={m.message} />
       });

       let sendMessage = () => {
           dispatch(sendMessageCreator());
       }

       let onMessageAriaChange = (e) =>{
        let text = e.target.value;
        dispatch(updateMessageAriaCreator(text));

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
                        value = {messagesPage.newMessage}/>
                       <button onClick = {sendMessage}>Send Message</button>
                    </div>
               </div>
           </div>
       );
    }
}; 

export default Dialogs;