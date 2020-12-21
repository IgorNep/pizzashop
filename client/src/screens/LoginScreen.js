import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader';
import Error from '../layout/Error';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  return (
    <FormContainer>
      <h2>Sign In</h2>
      {error && <Error type="danger" message={error} />}
      {loading && <Loader />}

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-light">
          Sign In
        </button>
      </form>
      <p>
        New customer?{' '}
        <Link
          to={redirect ? `/register?redirect=${redirect}` : '/register'}
          className="btn-link"
        >
          Register Now
        </Link>
      </p>
    </FormContainer>
  );
};

export default LoginScreen;
