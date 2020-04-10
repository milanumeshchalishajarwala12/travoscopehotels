import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Confirmation = (props) => {
  var destination = localStorage.getItem('destination');
  var roomtype = localStorage.getItem('roomtype');
  var bedtype = localStorage.getItem('bedtype');
  var checkindate = new Date(localStorage.getItem('checkindate')).toUTCString();
  var cin = checkindate.substring(0, 16);
  var checkoutdate = new Date(
    localStorage.getItem('checkoutdate')
  ).toUTCString();
  var cout = checkoutdate.substring(0, 16);
  var firstname = localStorage.getItem('firstname');
  var lastname = localStorage.getItem('lastname');
  var email = localStorage.getItem('Uemail');
  var phone = localStorage.getItem('phone');

  var noofguests = localStorage.getItem('noofguests');
  var fullname = firstname + ' ' + lastname;
  var subtotalprice = parseFloat(localStorage.getItem('totalprice'));
  var tax = parseFloat((subtotalprice / 100) * 18.24);
  var total = parseFloat(subtotalprice + tax);

  return (
    <Fragment>
      <div
        className=""
        style={{
          background: 'black',
          width: '95%',
          height: '5rem',
          margin: '20px',
          padding: '1rem',
        }}
      >
        <h2
          style={{
            fontFamily: 'Bellato',
            margin: '15px',
            fontSize: '2.3rem',
            color: 'white',
          }}
        >
          Your Booking has been Confirmed
        </h2>
      </div>
      <p
        style={{
          margin: '2rem',
          fontSize: '1.2rem',
          fontFamily: 'Prata',
          fontSize: '1.3rem',
        }}
      >
        See you at {destination} on {cin} !
      </p>
      <div style={{ background: 'smokewhite' }} className="summarycontainer">
        <div style={{ width: '40%', float: 'left' }}>
          <h2 style={{ fontSize: '1.3rem' }}>Booking Details</h2>
          <p>
            Name:{' '}
            <p
              style={{
                display: 'inline',
                fontSize: '1.1rem',
              }}
            >
              {fullname}, {noofguests} Guests
            </p>
          </p>
          <p>
            Email:{' '}
            <p style={{ display: 'inline', fontSize: '1.1rem' }}>{email}</p>
          </p>
          <p>
            Contact Number:{' '}
            <p style={{ display: 'inline', fontSize: '1.1rem' }}>{phone}</p>
          </p>
        </div>
        <div style={{ width: '40%', float: 'right' }}>
          <h2
            style={{
              marginBottom: '0px',
              marginTop: '4.5rem',
              fontSize: '1.3rem',
            }}
          >
            {destination}
          </h2>
          <p>
            Room:{' '}
            <p
              style={{
                display: 'inline',
                fontSize: '1rem',
              }}
            >
              {roomtype}, {bedtype}
            </p>
          </p>

          <p>
            Check-In:{' '}
            <p
              style={{
                display: 'inline',
                fontSize: '1rem',
              }}
            >
              {cin}
            </p>
          </p>
          <p>
            Check-Out:{' '}
            <p style={{ display: 'inline', fontSize: '1rem' }}>{cout}</p>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Confirmation.propTypes = {};

export default connect(null, {})(Confirmation);
