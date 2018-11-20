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
          <div className="row">
            <div className="col m4">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Card Title</span>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CTA;
