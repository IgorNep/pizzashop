import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QtyItemsHandler from '../components/QtyItemsHandler';
import Loader from '../layout/Loader';
import { removeFullItemFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

const CartScreen = ({ history, location }) => {
  const dispatch = useDispatch();

  const pageGoBack = location.search ? location.search.split('=')[1] : null;

  const cart = useSelector((state) => state.cart);
  const { cartItems, loading, error } = cart;

  const placeOrderHandler = () => {
    alert(
      `Order Placed. Amount to pay: ${cartItems.reduce(
        (acc, item) => item.qty * item.price + acc,
        0
      )} UAH`
    );
  };
  const removeItemHadler = (itemToRemove) => {
    dispatch(removeFullItemFromCart(itemToRemove));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>error</h3>
      ) : cartItems.length === 0 ? (
        <div className="main-content__menu">
          <h2>
            <ul style={{ margin: '0 auto' }}>
              <i className="fa fa-utensils fa-2x"></i> Cart Is Empty
              <Link to={pageGoBack ? `/menu/${pageGoBack}` : '/'}>
                <i className="fa fa-arrow-left"></i> Go Back
              </Link>
            </ul>
          </h2>
        </div>
      ) : (
        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>

                  <td>
                    <QtyItemsHandler product={item} />
                  </td>
                  <td>{item.price} UAH</td>
                  <td>{item.qty * item.price} UAH</td>
                  <td>
                    <i
                      className="fa fa-times"
                      style={{ color: 'red', cursor: 'pointer' }}
                      onClick={() => removeItemHadler(item)}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>Average Amount: </td>
                <td>
                  {cartItems.reduce(
                    (acc, item) => item.qty * item.price + acc,
                    0
                  )}{' '}
                  UAH
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() =>
              pageGoBack
                ? history.push(`/menu/${pageGoBack}`)
                : history.push('/')
            }
            className="btn btn-light"
          >
            Go Back
          </button>
          <button className="btn btn-dark" onClick={placeOrderHandler}>
            Place Order
          </button>
        </div>
      )}
    </>
  );
};

export default CartScreen;
