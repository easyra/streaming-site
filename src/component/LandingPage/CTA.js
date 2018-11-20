import React, { Component } from 'react';
import StreamOnline from './CTALiveStatus/StreamOnline';
import StreamOffline from './CTALiveStatus/StreamOffline';

class CTA extends Component {
  state = {
    isLive: true,
  };
  render() {
    return (
      <section className="cta ">
        <div className="center">
          <div className="row">
            {this.state.isLive ? <StreamOnline /> : <StreamOffline />}
          </div>
        </div>
      </section>
    );
  }
}

export default CTA;
