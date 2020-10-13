import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = (props) => {

  let postsComponents = props.state.profilePage.posts.map(post => <Post post={post.message} likeCount={post.likesCount} />)

  let newPost = React.createRef();

  let addPost = () => {
    props.store.addPost();
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.store.updateNewPostText(text);
  }

  return <div className='posts'>
    <div className='posts__title'>
      <h1>Posts</h1>
    </div>
    <div className='posts__new-post'>
      <textarea onChange={onPostChange} ref={newPost} className='posts__textarea textArea'
        placeholder='Type your post here...' value={props.state.profilePage.newPostText} />
      <div className='btn-row'>
        <button onClick={addPost} className='posts__send-btn btn style-pink hover-pinkColor'>Send post</button>
      </div>
    </div>

    {postsComponents}

  </div>
}

export default Posts;