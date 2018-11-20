import firebaseui from 'firebaseui';
import firebase from '../../firebase';
import React, { Component } from 'react';
import uiConfig from './firebaseUiConfig';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container" />
        <div id="loader">Loading...</div>
      </div>
    );
  }
}

export default Login;
