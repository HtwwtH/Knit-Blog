import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const PostsContainer = (props) => {
//   let state = props.store.getState();

//   let onAddPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onPostChange = (text) => {
//     let action = updateNewPostActionCreator(text);
//     props.store.dispatch(action);
//   }

//   return <Posts addPost={onAddPost} updateNewPostChange={onPostChange}
//     posts={state.profilePage.posts} newPostText={state.profilePage.newPost} />
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostActionCreator()) },
    updateNewPostChange: (text) => { dispatch(updateNewPostActionCreator(text)) }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;