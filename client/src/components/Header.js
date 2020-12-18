import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import CartLink from './CartLink';

const Header = () => {
  return (
    <nav>
      <Link to="/" style={{ display: 'flex', alignItems: 'flex-end' }}>
        <img src={logo} alt="logo" style={{ width: '60px' }} />
        <h2 style={{ color: '#fff', marginBottom: '6px' }}>Coliseum</h2>
      </Link>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'space-between',
          width: '300px',
          color: '#fff',
        }}
      >
        <li>
          <Link to="/menu/pizza">
            {' '}
            <i className="fa fa-pizza-slice"></i> Pizzas
          </Link>
        </li>
        <li>
          <Link to="/menu/pasta">
            <i className="fa fa-bacon"></i> Pastas
          </Link>
        </li>

        <li>
          <Link to="/menu/salad">
            <i className="fa fa-seedling"></i> Salads
          </Link>
        </li>
        <li>
          <Link to="/menu/drink">
            {' '}
            <i className="fa fa-wine-bottle"></i> Drinks
          </Link>
        </li>
      </ul>
      <ul style={{ width: '60px' }}>
        <li>
          <Link to="/profile">
            <i className="fa fa-user"></i>
          </Link>
        </li>
        <li>
          <CartLink />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
