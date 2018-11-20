import React, { Component } from 'react';
import firebaseui from 'firebaseui';
import firebase from '../../firebase';
import Button from '@material-ui/core/Button';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleClick = () => {
    //console.log(this.myRef.current.dropdown());
    //this.myRef.current;
  };
  render() {
    return (
      <nav class="blue darken-2 navbar-fixed">
        <div className="nav-wrapper">
          <div className="container">
            <a className="brand-logo left">MOCKSTREAMER</a>
            <ul className="right">
              <li>
                {/* Social Media Dropdown Button */}
                <li>
                  <a
                    class="dropdown-"
                    href="#!"
                    data-target="social"
                    ref={this.myRef}
                    onClick={this.handleClick}
                  >
                    Follow Me<i class="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
                {/* Dropdown Content */}
                <ul id="social" class="dropdown-content">
                  <li>
                    <a href="#!">one</a>
                  </li>
                  <li>
                    <a href="#!">two</a>
                  </li>
                  <li class="divider" />
                  <li>
                    <a href="#!">three</a>
                  </li>
                </ul>
                {/* Login Button */}
                <a class="waves-effect waves-light btn red">LOGIN</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
