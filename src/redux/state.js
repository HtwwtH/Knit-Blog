
let store = {
  _subscriber() {
    console.log('no subscribers(observers)');
  },

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
    }
  },

  _callSubscriber() { },

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }

  // dispatch(action) {
  //   if (action.type === 'ADD-POST') {
  //     let newPost = {
  //       id: 5,
  //       message: this._state.profilePage.newPostText,
  //       likesCount: 0
  //     };

  //     this._state.profilePage.posts.push(newPost);
  //     this._state.profilePage.newPostText = '';
  //     this._callSubscriber(this._state);
  //   }
  //   else if (action.type === 'UPDATE-NEW-POST') {
  //     this._state.profilePage.newPostText = action.newText;
  //     this._callSubscriber(this._state);
  //   }
  // }
}

export default store;