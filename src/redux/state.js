import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _subscriber() {
    console.log('no subscribers(observers)');
  },

  _callSubscriber() { },

  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'Hello', likesCount: 3 },
        { id: '2', message: "Today I'm knitting a new dog pillow", likesCount: 8 }
      ],
      newPostText: ''
    },

    messagesPage: {
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
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);

  }
}

export default store;