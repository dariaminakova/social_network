import React, {Component} from 'react';
import style from '../../component-styles/Dialogs.module.css';

import MessageItem from './Message/Message';
import DialogUser from './DialogUser/DialogUser';

class Dialogs extends Component {
    render(){
        let dialogsData =[
            {id: 1, name: 'Rick'},
            {id: 2, name: 'Morty'},
            {id: 3, name: 'Joy'},
            {id: 4, name: 'Gerald'},
            {id: 5, name: 'Chris'},
            {id: 6, name: 'Peter'},
            {id: 7, name: 'Tony'},
            {id: 8, name: 'Eva'}
        ];

        let messagesData =[
            {id: 0, message: 'Here'},
            {id: 1, message: 'will'},
            {id: 2, message: 'be'},
            {id: 3, message: 'some'},
            {id: 4, message: 'messages'},
            {id: 5, message: 'from'},
            {id: 6, message: 'your'},
            {id: 7, message: 'users'}
        ];

        let dialogsUsers = dialogsData.map((d) => {
            return <DialogUser name={d.name} id={d.id} />
        });

        let messageUsers = messagesData.map((m) => {
            return <MessageItem message={m.message} />
        });

        return (
            <div className={style.dialogs}>
                <div>
                    <ul>
                        {dialogsUsers}
                    </ul>
                </div>
                <div>
                    {messageUsers}
                </div>
            </div>
        );
    }
}; 

export default Dialogs;