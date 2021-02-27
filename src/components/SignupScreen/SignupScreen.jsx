import React, { useState } from 'react';
import validator from 'validator';
import { connect } from 'react-redux';

import './SignupScreen.scss';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { setCurrentUser, newUserToList } from '../../redux/userReducer/userActions';

function Signup({ history, newUser, curUser }) {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    phone: '',
    city: '',
    state: ''
  });
  const [isValid, setIsValid] = useState('');
  const [showModal, setShowModal] = useState(false);

  function gotoLogin() {
    history.replace('/');
  }

  function handleChange(e) {
    const { name, value } = e.target;
    
    setUserDetails(pstate => {
      return {
        ...pstate,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password, phone, city, state } = userDetails;

    if (!email || !password || !city || !state) {
      setIsValid('*Please fill all fields');
      return;
    };

    if (!validator.isEmail(userDetails.email)) {
      setIsValid('*Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setIsValid('*Password too short');
      return;
    }

    if (phone.length !== 10) {
      setIsValid('*Provide a valid 10 digit number');
      return;
    }

    setShowModal(true);
    newUser(userDetails);
    curUser(userDetails);
    setUserDetails({
      email: '',
      password: '',
      phone: '',
      city: '',
      state: ''
    });
  }

  function continueToHome() {
    history.replace('/home');
  }
  
  return(
    <React.Fragment>
      {
        showModal && <Modal clickToContinue={continueToHome}/>
      }
      <div className='signup'>
        <div className='heading'>
          <h2>Create Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <InputField type="email" name='email' placeholder="Email" change={handleChange}  value={userDetails.email} autoFocus/>
          <InputField type="text" name='password' placeholder="New Password" change={handleChange} value={userDetails.password} />
          <InputField type="number" name='phone' placeholder="Phone" change={handleChange} value={userDetails.phone} />
          <InputField type="text" name='city' placeholder="City" change={handleChange} value={userDetails.city} />
          <InputField type="text" name='state' placeholder="State" change={handleChange} value={userDetails.state} />
          {isValid && <p className='error__msg'>{isValid}</p>}
          <div className='btn__container'>
            <Button>Create Account</Button>
          </div>
        </form>
        <div className="to__login">
          <p>Already have an account? <span className='login__link' onClick={gotoLogin}>Login here</span></p>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  newUser: user => dispatch(newUserToList(user)),
  curUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(Signup);