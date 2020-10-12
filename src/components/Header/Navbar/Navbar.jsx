import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return <nav className={classes.nav}>
    <ul className={classes.navMenu}>
      <li>
        <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
      </li>
      <li>
        <NavLink to='/messages' activeClassName={classes.active}>Messages</NavLink>
      </li>
      <li>
        <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
      </li>
      <li>
        <NavLink to='/videos' activeClassName={classes.active}>Videos</NavLink>
      </li>
      <li>
        <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
      </li>
    </ul>
  </nav>
}

export default Navbar;