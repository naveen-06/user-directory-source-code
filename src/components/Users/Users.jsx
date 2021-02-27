import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Users.scss';
import User from '../User/User';
import { selectUsers } from '../../redux/userReducer/userSelector';

function Users({ users }) {
  return(
    <div className='users'>
      <div className='table__heading'>
        <p className='header'>S.No</p>
        <p className='header'>Email</p>
        <p className='header'>Phone</p>
        <p className='header'>City</p>
        <p className='header'>State</p>
      </div>
      {
        users.map((user, i) => (
          <User key={uuidv4()} user={user} id={i}/>
        ))
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers
});

export default connect(mapStateToProps)(Users);