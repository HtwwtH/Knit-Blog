import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/header-logo.png'
import './Header.css';
import Navbar from './Navbar/Navbar';


const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__line'>
          <div className='header__logo'>
            <NavLink to='/main-page'><img src={logo} alt={'logo'} /></NavLink>
          </div>
          <Navbar />
          <div className='header__login-button'>
            <button className='hover-opacity'>LOG IN</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;