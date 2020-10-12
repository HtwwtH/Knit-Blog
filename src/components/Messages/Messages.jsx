import React from 'react';
import { NavLink } from 'react-router-dom';
import './Messages.css';

const Dialog = (props) => {
  let path = "/messages/" + props.id;
  return (
    <NavLink to={path}>
      <div className='dialog active'>
        {props.name}
      </div >
    </NavLink >
  );
}

const Message = (props) => {
  return (
    <div className='message'>
      {props.message}
    </div>
  );
}

const Messages = () => {
  let dialogsData = [
    { id: '1', name: 'Ksenia' },
    { id: '2', name: 'Evelina' },
    { id: '3', name: 'Korina' },
    { id: '4', name: 'Alesya Zalesya' },
    { id: '5', name: 'Diana' }
  ];

  let messagesData = [
    { id: '1', message: 'Hello' },
    { id: '2', message: 'What are you knitting today?' },
    { id: '3', message: 'Send me the scheme, please.' }
  ]

  let dialogsComponents = dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />);
  let messagesComponents = messagesData.map(m => <Message message={m.message} />);

  return <div className='messages__content'>
    <div className='dialogs'>
      <h1>Dialogs</h1>
      {dialogsComponents}
    </div>

    <div className='messages'>
      <h1>Messages</h1>
      {messagesComponents}
    </div>
  </div>
}

export default Messages;