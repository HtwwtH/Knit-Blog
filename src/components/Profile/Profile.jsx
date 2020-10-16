import React from 'react';
import './Profile.css';
import UserCard from './UserCard/UserCard';
import PostsContainer from './Posts/PostsContainer';

const Profile = () => {
  return <div className='profile__content'>
    <div className='profile__container container'>
      <PostsContainer />
      <UserCard />


    </div>
  </div>
}

export default Profile;