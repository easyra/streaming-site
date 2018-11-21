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
          <section className="social" />
          <div className="row">
            <div className="col m-4">
              <div />
            </div>
            <div className="col m-4">
              <div />
            </div>
            <div className="col m-4">
              <div />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CTA;
