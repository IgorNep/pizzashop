import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrderDetails } from '../actions/orderActions';
import Loader from '../layout/Loader';
import Message from '../layout/Message';

const OrderScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const orderId = match.params.id;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { error, loading, order } = orderDetails;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId, userInfo, history]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="danger" message={error} />
      ) : (
        <div className="place-order-screen">
          <div className="place-order-screen__items">
            <div className="place-order-screen__items_item">
              <h2>Shipping</h2>
              {order.shippingAddress.country}, {order.shippingAddress.city},{' '}
              {order.shippingAddress.newPostNumber},{' '}
              {order.shippingAddress.address}{' '}
              {order.isDelivered ? (
                <p className="alert alert-success">Delivered</p>
              ) : (
                <p className="alert alert-danger">Not Delivered</p>
              )}
            </div>
            <div className="place-order-screen__items_item">
              <h2>Payment Method</h2>
              {order.paymentMethod}
              {order.isPaid ? (
                <p className="alert alert-success">Paid</p>
              ) : (
                <p className="alert alert-danger">Not Paid</p>
              )}
            </div>
            <div className="place-order-screen__items_item">
              <h2>Order Items</h2>
              <div className="place-order-screen__items_item">
                <table className="place-order-screen__items_table">
                  <tbody>
                    {order.orderItems.length === 0 ? (
                      <tr>
                        <td>
                          Your cart Is Empty.{' '}
                          <Link to="/menu/pizza" style={{ color: '#fff' }}>
                            Fill It
                          </Link>
                        </td>{' '}
                      </tr>
                    ) : (
                      order.orderItems.map((item) => (
                        <tr key={item._id}>
                          <td>
                            <img src={item.image} alt="img" />
                          </td>
                          <td>
                            {item.name} ({item.category})
                          </td>

                          <td>
                            {item.qty} x {item.price} UAH =
                            {item.qty * item.price} UAH
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
              {order.orderItems.length === 0 ? (
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
                      <td>{order.itemsPrice} UAH</td>
                    </tr>
                    <tr>
                      <td>Shipping:</td>
                      <td>{order.shippingPrice} UAH</td>
                    </tr>
                    <tr>
                      <td>
                        {' '}
                        <h3>Total:</h3>{' '}
                      </td>
                      <td>{order.totalPrice} UAH</td>
                    </tr>
                    <tr style={{ borderBottom: 'none' }}>
                      <td colSpan="2">
                        {' '}
                        {error && <Message type="danger" message={error} />}
                        <button className="btn btn-light d-block">Pay</button>
                      </td>
                    </tr>
                  </tbody>
                </>
              )}
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderScreen;
