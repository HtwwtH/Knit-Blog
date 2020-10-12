import React from 'react';
import './Profile.css';
import UserCard from './UserCard/UserCard';
import Posts from './Posts/Posts';

const Profile = () => {
  return <div className='profile__content'>
    <div className='profile__container container'>
      <Posts />
      <UserCard />


    </div>
  </div>
}

export default Profile;