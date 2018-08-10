import React from 'react';

const Button = (props) => 
  <button
    type='button'
    style={{margin: '2px'}}
    className={props.classNames}
    onClick={props.handleClick}>{props.children}
    <i className={props.iconClass} />
  </button>


export default Button;