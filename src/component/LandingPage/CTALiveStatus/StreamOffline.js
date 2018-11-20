import React, { Component } from 'react';

class StreamOffline extends Component {
  state = {
    nextStream: '6 days',
  };
  render() {
    return (
      <>
        <h1 className="center">Next Stream in {this.state.nextStream}</h1>
        <a class="btn-floating grey">
          <i class="material-icons">stop</i>
        </a>
      </>
    );
  }
}
export default StreamOffline;
