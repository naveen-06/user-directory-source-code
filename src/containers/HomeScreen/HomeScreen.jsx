import React from 'react';

import './HomeScreen.scss';
import Navbar from '../../components/Navbar/Navbar';
import Users from '../../components/Users/Users';

function HomeScreen() {
  return(
    <div className='home'>
      <Navbar />
      <Users />
    </div>
  );
}

export default HomeScreen;