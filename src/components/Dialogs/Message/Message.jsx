import React from "react";
import style from "../../../component-styles/Dialogs.module.css";

const MessageItem = props => {
  return (
    <div>
      <p className={style.message}>{props.message}</p>
    </div>
  );
};

export default MessageItem;
