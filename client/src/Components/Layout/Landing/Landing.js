import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../../Forms/BookingForm';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

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
              padding: '1rem',
              borderBottom: '1px solid black',
            }}
          >
            Having Legacy of over 50 years
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '1.5rem',
              padding: '1rem',
            }}
          >
            <br /> Bringing people together is what we’ve done since opening our
            first hotel in 1967. Now we’re deeply rooted in over 400 communities
            across the Country. We are proud to act as a point of connection for
            millions of travelers, many just like you. Welcome.
          </p>
        </div>
        <div>
          <Section2 />
        </div>
        <div style={{ height: '20rem', width: '90%' }}>
          <div
            style={{
              height: '5rem',
              padding: '0rem',
              borderBottom: '1px solid black',
              margin: '2rem 1rem 0rem 10rem',
            }}
          >
            <h2
              style={{
                fontFamily: 'Prata',
                fontSize: '2.5rem',
                textAlign: 'center',
              }}
            >
              Join Our Rewards program
            </h2>
          </div>

          <div
            style={{
              height: '10rem',
              padding: '0rem',
              margin: '1.5rem 5rem 0rem 28rem',
              width: '40%',
            }}
          >
            <p
              style={{
                fontFamily: 'Prata',
                fontSize: '1.3rem',
                textAlign: 'center',
              }}
            >
              Join Our Rewards program and earn rewards on your every
              reservation. Enjoy privileges of a Member and book using your
              loayality points across the Country.
            </p>
          </div>
        </div>

        <Section3 />
        <div style={{ height: '6rem', width: '100%' }}></div>
      </Fragment>
    );
  }
}

export default Landing;
