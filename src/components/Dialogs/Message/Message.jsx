import React, {Component} from 'react';
import style from '../../../component-styles/Dialogs.module.css';

class MessageItem extends Component {
    render(){
        const {message} = this.props;
        return (
        <div>
            <p className={style.message}>
                {message}
            </p>
        </div>);
    }
}; 

export default MessageItem;