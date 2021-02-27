import React from 'react';
import './Button.scss';

function Button({ children, click, ...otherProps}) {
  return(
    <button className='primary__btn' onClick={click} {...otherProps}>{children}</button>
  );
}

export default Button;