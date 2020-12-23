import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';
import ProgressSteps from '../components/ProgressSteps';
import Message from '../layout/Message';

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [newPostNumber, setNewPostNumber] = useState(
    shippingAddress.newPostNumber
  );
  const [country, setCountry] = useState(shippingAddress.country);
  const [message, setMessage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      address === '' ||
      city === '' ||
      newPostNumber === '' ||
      country === ''
    ) {
      setMessage('Please Enter All Fields');
      setTimeout(() => {
        setMessage(null);
      }, 1000);
    } else {
      dispatch(saveShippingAddress({ address, city, newPostNumber, country }));
      history.push('/payment');
    }
  };

  return (
    <>
      <ProgressSteps step1 step2 step3 />
      <FormContainer>
        <h2>Shipping</h2>
        {message && <Message type="danger" message={message} />}
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Enter city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPostNumber"> Post Code</label>
            <input
              type="text"
              placeholder="Enter Post Code"
              id="newPostNumber"
              value={newPostNumber}
              onChange={(e) => setNewPostNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              placeholder="Enter Country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-light">
            Continue
          </button>
        </form>
      </FormContainer>
    </>
  );
};

export default ShippingScreen;
