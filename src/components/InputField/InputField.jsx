import React from 'react';
import './InputField.scss';

function InputField({change, ...otherProps}) {
  return (
    <input className='input__field' onChange={change} {...otherProps} autoComplete="off"/>
  );
}

export default InputField;