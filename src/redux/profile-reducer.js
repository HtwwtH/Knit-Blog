const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  posts: [
    { id: '1', message: 'Hello', likesCount: 3 },
    { id: '2', message: "Today I'm knitting a new dog pillow", likesCount: 8 }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }

    case UPDATE_NEW_POST: {
      return {
        ...state,
        newPostText: action.newText
      };
    }

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text });

export default profileReducer;