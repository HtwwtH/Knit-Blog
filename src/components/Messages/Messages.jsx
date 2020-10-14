import React from 'react';
import './Messages.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/messages-reducer';

const Messages = (props) => {

  let dialogsComponents = props.state.messagesPage.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name} />); // превращаем массив диалогов из state в массив компонент, отображающих эти диалоги
  let messagesComponents = props.state.messagesPage.messages.map(mes => <Message message={mes.message} />);   // превращаем массив сообщений из state в массив компонент, отображающих эти сообщения
  let newMessage = props.state.messagesPage.newMessageText;

  let sendMessage = () => {                           // отправить в store action, что надо добавить сообщение, отобразить - перерисовка UI
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (e) => {                       // непрерывное считывание изменений по событию onChange в textarea
    let text = e.target.value;              // считали измененное значение (текст)
    let action = updateMessageActionCreator(text);
    props.dispatch(action);                           // отправили событие в store, перерисовка UI
  }

  return <div className='messages__content'>
    <div className='dialogs'>
      <h1>Dialogs</h1>
      {dialogsComponents}
    </div>

    <div className='messages'>
      <h1>Messages</h1>
      {messagesComponents}

      <div className='messages__new-message'>
        <textarea onChange={onMessageChange} className='message__textarea textArea'
          placeholder='Type your message here...' value={newMessage}></textarea>
        <div className='btn-row'>
          <button onClick={sendMessage} className='posts__send-btn btn style-pink hover-pinkColor'>Send message</button>
        </div>
      </div>
    </div>


  </div>
}

export default Messages;