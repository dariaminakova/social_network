import React, {Component} from 'react';
import style from '../../component-styles/Dialogs.module.css';

import MessageItem from './Message/Message';
import DialogUser from './DialogUser/DialogUser';

class Dialogs extends Component {
    render(){
       const {state} = this.props;

       let dialogsUsers = state.dialogsObj.map((d) => {
           return <DialogUser name={d.name} id={d.id} />
       });
       let messageUsers = state.messagesObj.map((m) => {
           return <MessageItem message={m.message} />
       });

       let newMessageElem = React.createRef();

       let sendMessage = () => {
           let currentMessage = newMessageElem.current.value;
           console.log(currentMessage);
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
                       <textarea className={style.dialogs} ref= {newMessageElem} ></textarea>
                       <button onClick = { sendMessage }>Send Message</button>
                    </div>
               </div>
           </div>
       );
    }
}; 

export default Dialogs;