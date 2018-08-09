import React from 'react';

const Button = ({handleClick, classNames, text}) => 
  <button
    type="button"
    className={classNames}
    onClick={handleClick}>{text}
  </button>


export default Button;