import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { confirmBooking, sendBookingEmail } from '../../actions/booking';
import { addBookingToUser } from '../../actions/booking';

const Summary = ({
  confirmBooking,
  addBookingToUser,
  auth: { isAuthenticated },
  user: { email, isCheckedIn },
}) => {
  var isCheckedIn = false;
  var isCheckedOut = false;
  var destination = localStorage.getItem('destination');
  var roomtype = localStorage.getItem('roomtype');
  var roomnumber = localStorage.getItem('roomnumber');
  var bedtype = localStorage.getItem('bedtype');
  var checkindate = new Date(localStorage.getItem('checkindate')).toUTCString();
  var cin = checkindate.substring(0, 16);
  var checkoutdate = new Date(
    localStorage.getItem('checkoutdate')
  ).toUTCString();
  var cout = checkoutdate.substring(0, 16);
  var days = localStorage.getItem('days');
  var firstname = localStorage.getItem('firstname');
  var lastname = localStorage.getItem('lastname');
  var Uemail = localStorage.getItem('Uemail');
  var phone = localStorage.getItem('phone');
  var str1 = localStorage.getItem('str1');
  var str2 = localStorage.getItem('str2');
  var city = localStorage.getItem('city');
  var state = localStorage.getItem('state');
  var status = localStorage.getItem('status');

  var zip = localStorage.getItem('zip');
  var noofguests = localStorage.getItem('noofguests');
  var address;
  if (str2 != null) {
    address = str1 + ', ' + str2 + ', ' + city + ', ' + state + ', ' + zip;
  } else {
    address = str1 + ', ' + city + ', ' + state + ', ' + zip;
  }
  var fullname = firstname + ' ' + lastname;

  var subtotalprice = parseFloat(localStorage.getItem('totalprice'));
  var tax = parseFloat((subtotalprice / 100) * 18.24);
  var total = parseFloat(subtotalprice + tax);
  var pricepernight = localStorage.getItem('pricepernight');
  var loyalitypoints = localStorage.getItem('loyalityPoints');

  const onConfirm = (e) => {
    if (isAuthenticated == false) {
      confirmBooking(
        firstname,
        bedtype,
        destination,
        roomnumber,
        roomtype,
        pricepernight,
        fullname,
        noofguests,
        Uemail,
        phone,
        status,
        loyalitypoints,
        checkindate,
        checkoutdate,
        address,
        subtotalprice,
        tax,
        total
      );
    }

    if (isAuthenticated == true) {
      confirmBooking(
        firstname,
        bedtype,
        destination,
        roomnumber,
        roomtype,

        pricepernight,
        fullname,
        noofguests,
        email,
        phone,
        status,
        loyalitypoints,
        checkindate,
        checkoutdate,
        address,
        subtotalprice,
        tax,
        total,
        isCheckedIn,
        isCheckedOut
      );

      addBookingToUser(
        bedtype,
        email,
        destination,
        roomnumber,
        roomtype,
        pricepernight,
        noofguests,
        checkindate,
        checkoutdate,
        address,
        total
      );
    }
  };

  return (
    <div>
      <h2
        style={{
          margin: '30px',
          fontSize: '2.6rem',
          fontFamily: 'Prata',
        }}
      >
        Booking Summary
      </h2>
      <div className="summarycontainer">
        <div>
          <div className="summarypicture"></div>
          <div className="summaryroomdetails">
            <h2>Room Details</h2>
            <p>
              {roomtype}, {bedtype}
            </p>

            <p>
              Location:{' '}
              <p style={{ display: 'inline', fontSize: '1rem' }}>
                {destination}
              </p>
            </p>
            <p>
              Check-In:{' '}
              <p style={{ display: 'inline', fontSize: '1rem' }}>{cin}</p>
            </p>
            <p>
              Check-Out:{' '}
              <p style={{ display: 'inline', fontSize: '1rem' }}>{cout}</p>
            </p>
            <p>
              Stay Duration:{' '}
              <p style={{ display: 'inline', fontSize: '1rem' }}>{days} Days</p>
            </p>
          </div>
        </div>
      </div>
      <div className="summarycontainer">
        <div className="summaryroomdetails">
          <h2> Guest Information</h2>
          <p>
            Name:{' '}
            <p
              style={{
                display: 'inline',
                fontSize: '1rem',
              }}
            >
              {firstname} {lastname}
            </p>
          </p>
          <p>
            Email:{' '}
            <p style={{ display: 'inline', fontSize: '1rem' }}>{Uemail}</p>
          </p>
          <p>
            Contact Number:{' '}
            <p style={{ display: 'inline', fontSize: '1rem' }}>{phone}</p>
          </p>
          <p>
            Address:
            <br />
            <p style={{ display: 'inline', fontSize: '1rem' }}>
              {str1}
              <br />
              {str2 ? (
                <span>
                  {str2}
                  <br />
                </span>
              ) : (
                ''
              )}
              {city} <br />
              {state} {zip}{' '}
            </p>
          </p>
        </div>
      </div>
      <div className="price">
        <h2>Summary of Charges</h2>
        <table style={{ width: '20rem' }}>
          <tr>
            <td>
              <p>Subtotal</p>
            </td>
            <td>
              <p>
                {subtotalprice}
                <p style={{ fontSize: '0.8rem' }}> USD</p>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Tax</p>
            </td>
            <td>
              <p>
                {tax.toFixed(2)}
                <p style={{ fontSize: '0.8rem' }}> USD</p>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Total</b>
              </p>
            </td>
            <td>
              <p>
                <b>
                  {total.toFixed(2)}
                  <p style={{ fontSize: '0.8rem' }}>
                    <b> USD</b>
                  </p>
                </b>
              </p>
            </td>
          </tr>
        </table>
      </div>
      <div
        style={{
          background: 'rgb(243, 243, 243)',
        }}
        className="summarycontainer"
      >
        <div>
          <form style={{ float: 'left' }}>
            <h2 style={{ marginLeft: '25px' }}>Payment Information</h2>
            <div style={{ margin: '1rem', display: 'inline-block' }}>
              <TextField
                variant="outlined"
                label="Name on Card"
                style={{
                  background: 'white',
                  borderRadius: '5px',
                  border: '0.5px solid white',
                  width: '24rem',
                  height: 'auto',
                  margin: '0rem 1rem 0rem 0.5rem',
                }}
                name="name"
                type="text"
                required
              />
            </div>
            <br />
            <div style={{ margin: '1rem', display: 'inline-block' }}>
              <TextField
                variant="outlined"
                label="Enter Card Number"
                style={{
                  background: 'white',
                  borderRadius: '5px',
                  border: '0.5px solid white',
                  width: '24rem',
                  height: 'auto',
                  margin: '0rem 1rem 0rem 0.5rem',
                }}
                name="cardnumber"
                type="number"
                required
              />
            </div>
            <br />
            <div style={{ margin: '1rem', display: 'inline-block' }}>
              <TextField
                variant="outlined"
                label="Expiration"
                style={{
                  background: 'white',
                  borderRadius: '5px',
                  border: '0.5px solid white',
                  width: '10rem',
                  height: 'auto',
                  margin: '0rem 1rem 0rem 0.5rem',
                }}
                name="exp"
                type="text"
                max="5"
              />
            </div>

            <div style={{ margin: '1rem', display: 'inline-block' }}>
              <TextField
                variant="outlined"
                label="CVC"
                style={{
                  background: 'white',
                  borderRadius: '5px',
                  border: '0.5px solid white',
                  width: '10rem',
                  height: 'auto',
                  margin: '0rem 1rem 0rem 0.5rem',
                }}
                name="cvv"
                type="number"
                max="4"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        <Link to="/confirmationpage">
          <Button
            onClick={(e) => onConfirm()}
            style={{
              fontSize: '1.1rem',
              background: '#373737',
              color: 'white',
              borderRadius: '1px',
              border: '0.5px solid white',
              width: '20rem',
              height: '4rem',
              margin: '2rem',
            }}
          >
            Confirm Details and Book{' '}
          </Button>
        </Link>
      </div>
    </div>
  );
};

Summary.propTypes = {
  confirmBooking: PropTypes.func.isRequired,
  addBookingToUser: PropTypes.func.isRequired,
  auth: PropTypes.func,
  user: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps, { confirmBooking, addBookingToUser })(
  Summary
);
