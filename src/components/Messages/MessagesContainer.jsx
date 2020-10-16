import React from 'react';
import Messages from './Messages'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/messages-reducer';
import { connect } from 'react-redux';

// const MessagesContainer = (props) => {

//   let state = props.store.getState();

//   let onSendMessage = () => {                           // отправить в store action, что надо добавить сообщение, отобразить - перерисовка UI
//     props.store.dispatch(addMessageActionCreator());
//   }

//   let onMessageChange = (text) => {                       // непрерывное считывание изменений по событию onChange в textarea
//     let action = updateMessageActionCreator(text);
//     props.store.dispatch(action);                           // отправили событие в store, перерисовка UI
//   }

//   return <Messages sendMessage={onSendMessage} updateNewMessage={onMessageChange}
//     messagesPage={state.messagesPage} />
// }

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {                            // отправить в store action, что надо добавить сообщение, отобразить - перерисовка UI
      dispatch(addMessageActionCreator());
    },
    updateNewMessage: (text) => {                   // непрерывное считывание изменений по событию onChange в textarea, отправили событие в store, перерисовка UI
      dispatch(updateMessageActionCreator(text));
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;