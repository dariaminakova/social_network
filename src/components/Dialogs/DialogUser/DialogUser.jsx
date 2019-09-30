import React from 'react';
// import style from '../../../component-styles/Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogUser = (props) => {
let path = '/dialogs/' + props.id;

return (
    <div>
        <li>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    </div>   
    );
}; 

export default DialogUser;