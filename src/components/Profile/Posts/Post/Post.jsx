import React from 'react';
import './Post.css';

const Post = (props) => {
  return <div className='post__content'>
    <div className='post'>
      <p>{props.post}</p>
    </div>
    <div className='post__like'>
      <span>Like</span> {props.likeCount}
    </div>

  </div>
}

export default Post;