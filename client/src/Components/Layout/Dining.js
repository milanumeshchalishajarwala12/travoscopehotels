import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMenu } from '../../actions/location';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { checkUserOut } from '../../actions/booking';

const Dining = ({
  user: { isCheckedIn, isCheckedOut },
  location: { Item1, Item2, Item3, Item4, Item5, Item6 },
  getMenu,
}) => {
  console.log(isCheckedIn, isCheckedOut);
  const [formData, setFormData] = useState({
    cuisine: '',
  });

  const { cuisine } = formData;
  const [state, setState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setFormData({ ...state, [event.target.name]: event.target.value });
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div style={{ background: 'smokewhite' }}>
      <h2
        style={{
          fontFamily: 'prata',
          fontSize: '2rem',
          textAlign: 'center',
          margin: '4.5rem 3.5rem 2rem 3.5rem',
        }}
      >
        Welcome to our World Class Cafeteria
      </h2>
      <div className="cafepicture"></div>
      <p
        style={{
          fontFamily: 'prata',
          fontSize: '1rem',
          textAlign: 'center',
          margin: '4.5rem 3.5rem 2rem 3.5rem',
        }}
      >
        You can view tonight's dinner menu only if you are checked in the hotel
      </p>
      {isCheckedIn === true && isCheckedOut === false ? (
        <div>
          <div style={{ height: '15rem' }} className="summarycontainer">
            <h2
              style={{
                fontFamily: 'prata',
                fontSize: '1rem',
                textAlign: 'left',
                margin: '1rem',
              }}
            >
              Dinner Menu Tonight (All Locations)
            </h2>
            <p>{Item1}</p>
            <p>{Item2}</p>
            <p>{Item3}</p>
            <p>{Item4}</p>
            <p>{Item5}</p>
            <p>{Item6}</p>
          </div>

          <h2
            style={{
              fontFamily: 'prata',
              fontSize: '1rem',
              textAlign: 'left',
              margin: '3rem 3rem 1rem 3rem',
            }}
          >
            <Link to="/order">
              <p> Order one of many different cuisines we offer ></p>
            </Link>
          </h2>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

Dining.propTypes = {
  user: PropTypes.object.isRequired,
  getMenu: PropTypes.func.isRequired,
  location: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  location: state.location,
});

export default connect(mapStateToProps, { getMenu })(Dining);
