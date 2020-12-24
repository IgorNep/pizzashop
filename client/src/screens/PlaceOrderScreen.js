import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import Message from '../layout/Message';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, error, order } = orderCreate;

  cart.itemsPrice = cartItems
    .reduce((acc, item) => item.qty * item.price + acc, 0)
    .toFixed(2);
  cart.shippingPrice = (cart.itemsPrice >= 250 ? 0 : 70).toFixed(2);
  cart.totalPrice = (
    Number(cart.shippingPrice) + Number(cart.itemsPrice)
  ).toFixed(2);

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    //eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

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
                  {cartItems.length === 0 ? (
                    <tr>
                      <td>
                        Your cart Is Empty.{' '}
                        <Link to="/menu/pizza" style={{ color: '#fff' }}>
                          Fill It
                        </Link>
                      </td>{' '}
                    </tr>
                  ) : (
                    cartItems.map((item) => (
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
                    ))
                  )}
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
            {cartItems.length === 0 ? (
              <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                No Items{' '}
                <Link to="/menu/pizza" style={{ color: '#fff' }}>
                  Fill The Cart
                </Link>{' '}
              </p>
            ) : (
              <>
                <tbody>
                  <tr>
                    <td>Items:</td>
                    <td>{cart.itemsPrice} UAH</td>
                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td>{cart.shippingPrice} UAH</td>
                  </tr>
                  <tr>
                    <td>
                      {' '}
                      <h3>Total:</h3>{' '}
                    </td>
                    <td>{cart.totalPrice} UAH</td>
                  </tr>
                  <tr style={{ borderBottom: 'none' }}>
                    <td colSpan="2">
                      {' '}
                      {error && <Message type="danger" message={error} />}
                      <button
                        className="btn btn-light d-block"
                        onClick={placeOrderHandler}
                      >
                        Place Order
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
