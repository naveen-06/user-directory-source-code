import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import validator from 'validator';

import './LoginScreen.scss';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import { selectUsers, selectCurrentUser } from '../../redux/userReducer/userSelector';
import { setCurrentUser } from '../../redux/userReducer/userActions';

function Login({ history, users, setCurUser, curUser }) {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });
  const [isValid, setIsValid] = useState('');

  function gotoSignup() {
    history.push('/signup');
  }

  function handleChange(e) {
    let { name, value } = e.target;
    
    if (name === 'email') value = value.toLocaleLowerCase();

    setUserDetails(pstate => {
      return {
        ...pstate,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = userDetails;

    if (!email || !password || !validator.isEmail(email)) {
      setIsValid('*Enter a valid email and password');
      return;
    }

    const currentUser = users.find(user => user.email === email);

    if (!currentUser) {
      setIsValid('*No user with this email');
      return;
    };

    if (currentUser.password !== password) {
      setIsValid('*Incorrect password!');
      return;
    }

    setIsValid('');
    setUserDetails({
      email: '',
      password: ''
    });
    
    setCurUser(currentUser);
    history.replace('/home');
  }

  return(
    curUser ? <Redirect to='/home'/> : 
    <div className='login'>
      <div className='heading'>
        <h2>Welcome back</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <InputField type="text" name='email' placeholder="Email" value={userDetails.email} change={handleChange} autoFocus />
        <InputField type="password" name='password' placeholder="Password" value={userDetails.password} change={handleChange}/>
        {isValid !== '' && <p className='error__msg'>{isValid}</p>}
        <div className='btn__container'>
          <Button type='submit'>Login</Button>
        </div>
      </form>
      <div className="to__signup">
        <p>Don't have an account? <span className='signup__link' onClick={gotoSignup}>Signup here</span></p>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  curUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
