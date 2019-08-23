import React, {Component} from 'react';
import style from '../../component-styles/Dialogs.module.css';

class Dialogs extends Component {
    render(){
        return (
            <div className={style.dialogs}>
                <div>users</div>
                <div>masseges</div>
            </div>
        );
    }
}; 

export default Dialogs;