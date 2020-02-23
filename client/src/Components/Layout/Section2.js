import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Section2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="landingsection2img">
          <div className="landingsection2text">
            <p>Cuisines from across the World</p>

            <p style={{ color: 'orange', fontSize: '0.9rem' }}>
              <Link to="/listofcuisines">EXPLORE CUISINES</Link>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Section2;
