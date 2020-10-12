import React from 'react';
import './UserCard.css';
import image from './images/avatar.jpg';

const UserCard = () => {
  return <div className='userCard'>

    <div className='userCard__avatar'>
      <img src={image} />
    </div>

    <div className='userCard__user'>
      <p className='userCard__login'>Alina HtwwtH</p>
      <span className='userCard__area'>Russia, Krasnoyarsk</span>
    </div>

    <div className='userCard__activity'>
      <div className='buttons-row'>
        <div className='btn-col'>
          <a className='user-activity-btn style-pink hover-pinkColor'>
            <i className='fa fa-plus'></i>FOLLOW</a>
        </div>
        <div className='btn-col'>
          <a className='user-activity-btn style-gray hover-grayColor'>
            <i className='fa fa-message'></i>MESSAGE</a>
        </div>
      </div>
    </div>

    <div className='userCard__info'>
      <h5>About</h5>
      <p>Hello, its text about me Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem at facere earum nesciunt. Ab illum amet et vero doloremque eligendi magni atque in odit veritatis cumque, temporibus quo nostrum.Praesentium, quam quibusdam ratione qui, laudantium laborum sit quis error dolores ipsam, minus fugit deleniti veritatis. Magni asperiores sunt nihil provident similique est eaque perferendis aspernatur repellendus, ducimus laboriosam officiis?</p>
    </div>
  </div>

}

export default UserCard;