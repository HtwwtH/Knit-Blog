import React from 'react';
import './Messages.css';
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Messages = (props) => {

  let dialogsComponents = props.state.messagesPage.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name} />);
  let messagesComponents = props.state.messagesPage.messages.map(mes => <Message message={mes.message} />);

  let newMessage = React.createRef();
  let sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
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
        <textarea ref={newMessage} className='message__textarea textArea' placeholder='Type your message here...' ></textarea>
        <div className='btn-row'>
          <button onClick={sendMessage} className='posts__send-btn btn style-pink hover-pinkColor'>Send message</button>
        </div>
      </div>
    </div>


  </div>
}

export default Messages;