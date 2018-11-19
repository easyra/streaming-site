import React from 'react';

const Navbar = props => {
  return (
    <nav class="blue darken-2 navbar-fixed">
      <div className="nav-wrapper">
        <div className="container">
          <a className="brand-logo left">MOCKSTREAMER</a>
          <ul className="right">
            <li>
              <a class="waves-effect waves-light btn red">LOGIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
