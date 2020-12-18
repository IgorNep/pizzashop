import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../layout/Loader';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const { items, loading, error } = cartItems;

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>error</h3>
      ) : items.length === 0 ? (
        <h2>Cart Is Empty</h2>
      ) : (
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
                <td>{item.qty}</td>
                <td>{item.price} UAH</td>
                <td>{item.qty * item.price} UAH</td>
                <td>
                  <i
                    className="fa fa-times"
                    style={{ color: 'red', cursor: 'pointer' }}
                  ></i>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>Average Amount: </td>
              <td>222.00 uah</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default CartScreen;
