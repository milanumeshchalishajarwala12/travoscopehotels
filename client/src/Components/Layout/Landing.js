import React, { Component, Fragment } from 'react';
import BookingForm from './BookingForm';
import Section2 from './Section2';
import Section3 from './Section3';
class Landing extends Component {
  render() {
    return (
      <Fragment>
        <section className="landing">
          <BookingForm />
        </section>
        <div className="section12">
          <p
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '3rem',
              borderBottom: '1px solid black'
            }}
          >
            TRAVOSCOPE HOTELS
          </p>
          <p>
            <br /> AT THE HEART OF COMMUNITIES FOR OVER 80 YEARS
            <br /> Bringing people together is what we’ve done since opening our
            first Sheraton in 1937. Now we’re deeply rooted in over 400
            communities across the globe. We are proud to act as a point of
            connection for millions of travelers, many just like you. Welcome.
          </p>
        </div>
        <div>
          <Section2 />
        </div>
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
      </Fragment>
    );
  }
}

export default Landing;
