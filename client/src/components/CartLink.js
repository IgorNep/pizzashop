import React from 'react';
import { Link } from 'react-router-dom';

const CartLink = ({ qty }) => {
  return (
    <Link to="/cart">
      {' '}
      <div style={{ position: 'relative' }}>
        <i className="fa fa-shopping-cart" style={{ color: '#fff' }}></i>
        <span
          style={{
            background: '#fff',
            padding: '0 0.4rem',
            position: 'absolute',
            bottom: '-15px',
            right: '-15px',
            borderRadius: '50%',
            backgroundColor: 'red',
            fontSize: '1rem',
          }}
        >
          {qty}
        </span>
      </div>
    </Link>
  );
};

CartLink.defaultProps = {
  qty: 0,
};
export default CartLink;
