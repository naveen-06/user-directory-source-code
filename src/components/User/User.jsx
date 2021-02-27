import React from 'react';

import './User.scss';

function User({ user, id }) {
  return(
    <div className='user'>
      <p className='idx'>{id + 1}</p>
      <p className='email'>{user.email}</p>
      <p className='phone'>{user.phone}</p>
      <p className='city'>{user.city}</p>
      <p className='state'>{user.state}</p>
    </div>
  );
}

export default User;