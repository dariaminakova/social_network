import React, {Component} from 'react';
// import style from '../../../component-styles/Dialogs.module.css';
import {NavLink} from 'react-router-dom';

class DialogUser extends Component {
    render(){
    const {name, id} = this.props;
    let path = '/dialogs/' + id;
    
    return (
        <div>
            <li>
                <NavLink to={path}>{name}</NavLink>
            </li>
        </div>   
        );}
}; 

export default DialogUser;