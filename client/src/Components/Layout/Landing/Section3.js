import React from 'react';
import { Link } from 'react-router-dom';

export default function Section3() {
  return (
    <div className="landingsection3img">
      <div className="landingsection3text">
        <p>Relax. Refresh. Recharge.</p>

        <p style={{ color: 'black', fontSize: '0.9rem' }}>
          <Link to="/amenities">EXPLORE AMENITIES &#10146;</Link>
        </p>
      </div>
    </div>
  );
}
