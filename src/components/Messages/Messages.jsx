import React from 'react';
import './Messages.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Messages = (props) => {

  let dialogsComponents = props.messagesPage.dialogs.map(dialog => <Dialog id={dialog.id} key={dialog.id} name={dialog.name} />); // превращаем массив диалогов из state в массив компонент, отображающих эти диалоги
  let messagesComponents = props.messagesPage.messages.map(mes => <Message message={mes.message} key={mes.id} />);   // превращаем массив сообщений из state в массив компонент, отображающих эти сообщения
  let newMessage = props.messagesPage.newMessageText;

  let onSendMessage = () => {                           // отправить в store action, что надо добавить сообщение, отобразить - перерисовка UI
    props.sendMessage();
  }

  let onMessageChange = (e) => {                       // непрерывное считывание изменений по событию onChange в textarea
    let text = e.target.value;              // считали измененное значение (текст)
    props.updateNewMessage(text);                           // отправили событие в store, перерисовка UI
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
          <button onClick={onSendMessage} className='posts__send-btn btn style-pink hover-pinkColor'>Send message</button>
        </div>
      </div>
    </div>


  </div>
}

export default Messages;