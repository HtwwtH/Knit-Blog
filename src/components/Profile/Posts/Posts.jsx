import React from 'react';
import './Posts.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';

const Posts = (props) => {

  let postsComponents = props.state.profilePage.posts.map(post => <Post post={post.message} likeCount={post.likesCount} />)
  let newPost = props.state.profilePage.newPostText;

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  }

  return <div className='posts'>
    <div className='posts__title'>
      <h1>Posts</h1>
    </div>
    <div className='posts__new-post'>
      <textarea onChange={onPostChange} className='posts__textarea textArea'
        placeholder='Type your post here...' value={newPost} />
      <div className='btn-row'>
        <button onClick={addPost} className='posts__send-btn btn style-pink hover-pinkColor'>Send post</button>
      </div>
    </div>

    {postsComponents}

  </div>
}

export default Posts;