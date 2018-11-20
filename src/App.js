import React, { Component } from 'react';

import Navbar from './component/Navbar/Navbar';
import LandingPage from './component/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
