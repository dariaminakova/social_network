// Modules
import React from 'react';

// Components
import MessageItem from './Message/Message';
import DialogUser from './DialogUser/DialogUser';

// Styles
import style from '../../component-styles/Dialogs.module.css';

const Dialogs = (props) => {
  const { messagesPage, sendMessage, updateMessageAria } = props;

  const dialogsUsers = messagesPage.dialogs.map((d) => {
    return <DialogUser name={d.name} id={d.id} key={d.id} />;
  });
  const messageUsers = messagesPage.messages.map((m) => {
    return <MessageItem message={m.message} key={m.id} />;
  });

  const onSendMessage = () => {
    sendMessage();
  };

  const onMessageAriaChange = (e) => {
    const text = e.target.value;
    updateMessageAria(text);
  };

  return (
    <div className={style.dialogs}>
      <div>
        <ul>{dialogsUsers}</ul>
      </div>
      <div>
        {messageUsers}
        <div>
          <textarea
            className={style.dialogs}
            placeholder="type your message"
            onChange={onMessageAriaChange}
            value={props.messagesPage.newMessage}
          />
          <button onClick={onSendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
