import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../../Forms/BookingForm';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import LandingFooter from './LandingFooter';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Section1 />
        <div className="section12">
          <p
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '3rem',
              borderBottom: '1px solid black'
            }}
          >
            Having Legacy of over 50 years
          </p>
          <p>
            <br /> Bringing people together is what we’ve done since opening our
            first hotel in 1967. Now we’re deeply rooted in over 400 communities
            across the globe. We are proud to act as a point of connection for
            millions of travelers, many just like you. Welcome.
          </p>
        </div>
        <div>
          <Section2 />
        </div>
        {/* */}
        <div style={{ height: '7rem', width: '100%' }}></div>
        <div className="section12">
          <p
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '2rem',
              borderBottom: '1px solid black'
            }}
          >
            JOIN OUR REWARDS PROGRAM{' '}
          </p>
          <p>
            <br />
            Travoscope Hotels™, the newly combined travel loyalty program
            replacing Marriott Rewards and SPG, offers you endless experiences
            and world-class rewards. Earn and redeem points for all your travels
            at Sheraton Hotels worldwide..
          </p>
        </div>
        <Section3 />
        <div style={{ height: '6rem', width: '100%' }}></div>

        <LandingFooter />
      </Fragment>
    );
  }
}

export default Landing;
