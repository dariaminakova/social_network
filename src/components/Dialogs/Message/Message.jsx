// Modules
import React from 'react';

// Styles
import style from '../../../component-styles/Dialogs.module.css';

const MessageItem = (props) => {
  const { message } = props;
  return (
    <div>
      <p className={style.message}>{message}</p>
    </div>
  );
};

export default MessageItem;
