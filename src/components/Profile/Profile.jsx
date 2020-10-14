import React from 'react';
import './Profile.css';
import UserCard from './UserCard/UserCard';
import Posts from './Posts/Posts';

const Profile = (props) => {
  return <div className='profile__content'>
    <div className='profile__container container'>
      <Posts
        state={props.state}
        dispatch={props.dispatch} />
      <UserCard />


    </div>
  </div>
}

export default Profile;