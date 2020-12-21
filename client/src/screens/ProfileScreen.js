import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader';
import Message from '../layout/Message';
import { getUserDetails } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else if (!user || !user.name) {
      dispatch(getUserDetails('profile'));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [history, dispatch, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      //update user functionality
      console.log('UPDATE USER');
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="danger" message={error} />
      ) : (
        <div className="profile-screen">
          <FormContainer>
            <h2>User Profile</h2>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                <label htmlFor="password">New Password </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-light">
                Update
              </button>
            </form>
          </FormContainer>
          <div className="profile-screen__orders">
            <h2>My orders</h2>
            <table className="profile-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* {
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <i className="fa fa-times" style={{ color: 'red' }}></i>
                    </td>
                  </tr>
                } */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileScreen;
