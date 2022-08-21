// Modules
import React from 'react';
import { NavLink } from 'react-router-dom';

// import style from '../../../component-styles/Dialogs.module.css';

const DialogUser = (props) => {
  const { id, name } = props;
  let path = '/dialogs/' + id;

  return (
    <div>
      <li>
        <NavLink to={path}>{name}</NavLink>
      </li>
    </div>
  );
};

export default DialogUser;
