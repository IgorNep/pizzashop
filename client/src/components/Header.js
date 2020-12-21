import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import CartLink from './CartLink';
import { logout } from '../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
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
          width: '100%',
          maxWidth: '500px',
          color: '#fff',
        }}
        className="nav-menu"
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
          <Link to="/menu/desert">
            <i class="fas fa-ice-cream"></i> Deserts
          </Link>
        </li>
        <li>
          <Link to="/menu/drink">
            {' '}
            <i className="fa fa-wine-bottle"></i> Drinks
          </Link>
        </li>
      </ul>
      <ul className="nav-special-links">
        <li>
          <CartLink />
        </li>
        {userInfo ? (
          <>
            <li className="user-info-link">
              {userInfo.name}{' '}
              <ul className="user-info-link_menu">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li onClick={logoutHandler}>Logout</li>
              </ul>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">
              <i className="fa fa-user"></i>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
