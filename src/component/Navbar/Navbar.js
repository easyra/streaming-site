import React from 'react';

const Navbar = props => {
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
                  class="dropdown-trigger"
                  href="#!"
                  data-target="social"
                  onClick={handleClick}
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
};

const handleClick = event => {
  console.log('hi');
  event.currentTarget.open();
};

export default Navbar;
