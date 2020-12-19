import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QtyItemsHandler from '../components/QtyItemsHandler';
import Loader from '../layout/Loader';
import { removeFullItemFromCart } from '../actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartItems);
  const { items, loading, error } = cartItems;

  const placeOrderHandler = () => {
    alert(
      `Order Placed. Amount to pay: ${items.reduce(
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
      ) : items.length === 0 ? (
        <h2>Cart Is Empty</h2>
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
              {items.map((item) => (
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
                  {items.reduce((acc, item) => item.qty * item.price + acc, 0)}{' '}
                  UAH
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-dark" onClick={placeOrderHandler}>
            Place Order
          </button>
        </div>
      )}
    </>
  );
};

export default CartScreen;
