import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.scss';
import Button from '../Button/Button';
import { logoutUser } from '../../redux/userReducer/userActions';
import { ReactComponent as TeamIcon } from '../../assets/team.svg';

function Navbar({ logout, history }) {
  function handleLogout() {
    logout();
    history.push('/');
  }

  return(
    <nav className='navbar'>
      <div className='heading'>
        <TeamIcon className='team__icon'/>
        <h3>Users Directory</h3>
      </div>
      <div className='btn__container'>
        <Button click={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default withRouter(connect(null, mapDispatchToProps)(Navbar));