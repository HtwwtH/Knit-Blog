import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Messages.css';

const Dialog = (props) => {
  let path = "/messages/" + props.id;

  let setDialogClass = () => {
    // let dialogClassName = 'dialog';
    // if (dialogs.id === )
  }

  let name = 'dialog'

  return (
    <NavLink to={path} activeClassName={'active'}>
      <div className='dialog'>
        {props.name}
      </div >
    </NavLink >
  );
}


export default Dialog;