import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';

const Amenities = props => {
  return (
    <div>
      <div
        style={{
          margin: '20px 0px 20px 0px',
          background: '#373737',
          color: 'white',
          height: '4rem'
        }}
      >
        <h2
          style={{
            margin: '20px 0px 0px 40px',
            fontFamily: 'Prata',
            fontSize: '2.5rem'
          }}
        >
          Amenities
        </h2>
      </div>
      <div className="spoolcontainer">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontFamily: 'Prata',
            margin: '20px 0px 40px 0px'
          }}
        >
          Swimming Pool
        </h2>
        <div className="spoolpicture"></div>
        <div className="spooltext">
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              marginTop: '2rem',
              fontSize: '1.5rem'
            }}
          >
            All Locations{' '}
          </p>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              marginTop: '2rem',
              fontSize: '1rem'
            }}
          >
            Hours: 24 Hours, 7 Days a week{' '}
          </p>
        </div>
      </div>
      <div className="spoolcontainer">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontFamily: 'Prata',
            margin: '20px 0px 40px 0px'
          }}
        >
          Fitness Center{' '}
        </h2>
        <div style={{ marginTop: '20px' }} className="gympicture"></div>
        <div className="spooltext">
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              marginTop: '2rem',
              fontSize: '1.5rem'
            }}
          >
            All Locations{' '}
          </p>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              marginTop: '2rem',
              fontSize: '1rem'
            }}
          >
            Hours: 5:00 AM - 11:00 PM , 7 Days a week{' '}
          </p>
        </div>
      </div>
      <div className="spoolcontainer">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontFamily: 'Prata',
            margin: '20px 0px 40px 0px'
          }}
        >
          Hot Tub{' '}
        </h2>
        <div style={{ marginTop: '20px' }} className="hottubpicture"></div>
        <div className="spooltext">
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              marginTop: '2rem',
              fontSize: '1.5rem'
            }}
          >
            All Locations{' '}
          </p>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              marginTop: '2rem',
              fontSize: '1rem'
            }}
          >
            Hours: 9:00 AM to 9:00 PM, 7 Days a Week
          </p>
        </div>
      </div>

      <div className="spoolcontainer">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontFamily: 'Prata',
            margin: '20px 0px 40px 0px'
          }}
        >
          Deep Tissue Massage{' '}
        </h2>
        <div style={{ marginTop: '20px' }} className="massagepicture"></div>
        <div className="spooltext">
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              marginTop: '2rem',
              fontSize: '1.5rem'
            }}
          >
            Available at all Locations{' '}
          </p>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Prata',
              marginTop: '2rem',
              fontSize: '1rem'
            }}
          >
            <div>
              <p>Hourly slots from 9:00 AM to 8:00PM</p>
              <Link to="/bookslot">
                <Button
                  style={{
                    background: '#373737',
                    width: '12rem',
                    color: 'white'
                  }}
                >
                  Book a Slot
                </Button>
              </Link>
            </div>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

Amenities.propTypes = {};

export default connect(null, {})(Amenities);
