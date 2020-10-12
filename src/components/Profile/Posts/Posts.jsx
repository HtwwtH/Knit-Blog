import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = () => {
  let postData = [
    { id: '1', message: 'Hello', likesCount: 3 },
    { id: '2', message: "Today I'm knitting a new dog pillow", likesCount: 8 }
  ]

  let postsComponents = postData.map(post => <Post post={post.message} likeCount={post.likesCount} />)

  return <div className='posts'>
    <div className='posts__title'>
      <h1>Posts</h1>
    </div>
    <div className='posts__new-post'>
      <textarea className='posts__textarea' placeholder='Type your post here...' ></textarea>
      <div className='btn-row'>
        <button className='posts__send-btn btn style-pink hover-pinkColor'>Send post</button>
      </div>
    </div>

    {postsComponents}

  </div>
}

export default Posts;