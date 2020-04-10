import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { viewCusines } from '../../../actions/user';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Section2 = ({ viewCusines }) => {
  return (
    <div className="landingsection2img">
      <div className="landingsection2text">
        <p>Cuisines from across the World</p>

        <p
          style={{
            color: 'orange',
            fontSize: '0.9rem',
          }}
        >
          <a to="/listofcuisines" onClick={(e) => viewCusines(e)}>
            EXPLORE CUISINES ››
          </a>
        </p>
      </div>
    </div>
  );
};

Section2.propTypes = {
  viewCusines: PropTypes.func,
};

export default connect(null, { viewCusines })(Section2);
