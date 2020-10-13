import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Messages.css';

const Dialog = (props) => {
  let path = "/messages/" + props.id;
  return (
    <NavLink to={path}>
      <div className='dialog active'>
        {props.name}
      </div >
    </NavLink >
  );
}


export default Dialog;