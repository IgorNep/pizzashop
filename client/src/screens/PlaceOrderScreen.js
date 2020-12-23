import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProgressSteps from '../components/ProgressSteps';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;

  const totalItemsPay = cartItems.reduce(
    (acc, item) => item.qty * item.price + acc,
    0
  );
  const shippingPay = totalItemsPay >= 250 ? 0 : 70;
  const totalPay = shippingPay + totalItemsPay;
  return (
    <>
      <div className="place-order-screen">
        <div className="place-order-screen__items">
          <div className="place-order-screen__items_item">
            <h2>Shipping</h2>
            {shippingAddress.country}, {shippingAddress.city},{' '}
            {shippingAddress.newPostNumber}, {shippingAddress.address}{' '}
          </div>
          <div className="place-order-screen__items_item">
            <h2>Payment Method</h2>
            {paymentMethod}
          </div>
          <div className="place-order-screen__items_item">
            <h2>Order Items</h2>
            <div className="place-order-screen__items_item">
              <table className="place-order-screen__items_table">
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img src={item.image} alt="img" />
                      </td>
                      <td>
                        {item.name} ({item.category})
                      </td>

                      <td>
                        {item.qty} x {item.price} UAH ={item.qty * item.price}{' '}
                        UAH
                      </td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                <td>{totalItemsPay} UAH</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>{shippingPay} UAH</td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <h3>Total:</h3>{' '}
                </td>
                <td>{totalPay} UAH</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-light d-block">Pay</button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
