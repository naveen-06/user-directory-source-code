import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Login from './components/LoginScreen/LoginScreen';
import Signup from './components/SignupScreen/SignupScreen';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import { selectCurrentUser } from './redux/userReducer/userSelector';

function App({ currentUser }) {
  return(
    <div>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/signup' exact component={Signup}/>
        {
          currentUser ? <Route path='/home' exact component={HomeScreen}/> : <Redirect to='/'/>
        }
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);