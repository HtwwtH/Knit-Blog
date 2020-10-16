const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
  dialogs: [
    { id: '1', name: 'Ksenia' },
    { id: '2', name: 'Evelina' },
    { id: '3', name: 'Korina' },
    { id: '4', name: 'Alesya Zalesya' },
    { id: '5', name: 'Diana' }
  ],
  messages: [
    { id: '1', message: 'Hello' },
    { id: '2', message: 'What are you knitting today?' },
    { id: '3', message: 'Send me the scheme, please.' }
  ],
  newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      return {
        ...state,                                      // работаем с копией state!
        messages: [...state.messages, newMessage],    // добавить старые записи и добавить новую запись в массив
        newMessageText: ''
      };
    }

    case UPDATE_NEW_MESSAGE: {
      return {                                      // работаем с копией state!
        ...state,
        newMessageText: action.newText               // обновление в state данных
      };
    }

    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newText: text });

export default messagesReducer;