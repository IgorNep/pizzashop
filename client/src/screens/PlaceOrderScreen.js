import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProgressSteps from '../components/ProgressSteps';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod } = cart;

  return (
    <>
      <ProgressSteps step1 step2 step3 step4 />
      <div className="place-order-screen">
        <div className="place-order-screen__items">
          <div className="place-order-screen__items_item">
            <h2>Shipping</h2>
            {shippingAddress.address}
          </div>
          <div className="place-order-screen__items_item">
            <h2>Payment Method</h2>
            {paymentMethod}
          </div>
          <div className="place-order-screen__items_item">
            <h2>Order Items</h2>
          </div>
        </div>
        <div className="place-order-screen__sidebar">
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  <h2>Order Summary</h2>
                  <small>(For orders more 250 UAH, shipping is free)</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Items:</td>
                <td>1200 UAH</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>0 UAH</td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <h3>Total:</h3>{' '}
                </td>
                <td>1200 UAH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
