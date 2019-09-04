import React, {Component} from 'react';
import style from '../../component-styles/Dialogs.module.css';

import {sendMessageActionCreator, updateMessageAriaActionCreator} from '../../redux/state';

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

       let newMessageElem = React.createRef();

       let sendMessage = () => {
        //    let currentMessage = newMessageElem.current.value;
           dispatch(sendMessageActionCreator());
       }

       let onMessageAriaChange = () =>{
        let text = newMessageElem.current.value;
        dispatch(updateMessageAriaActionCreator(text));

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
                        onChange = {onMessageAriaChange}
                        ref= {newMessageElem} 
                        value = {messagesPage.newMessage}/>
                       <button onClick = { sendMessage }>Send Message</button>
                    </div>
               </div>
           </div>
       );
    }
}; 

export default Dialogs;