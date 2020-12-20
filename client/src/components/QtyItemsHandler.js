import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../actions/cartActions';

const QtyItemsHandler = ({ product, productQtyHandler }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (cartItems.length > 0) {
      cartItems.map((item) => item._id === product._id && setQty(item.qty));
    }
  }, [cartItems, product._id]);

  useEffect(() => {
    if (productQtyHandler) {
      productQtyHandler(qty);
    }
  }, [qty, productQtyHandler]);

  const removeItemHadler = () => {
    if (qty > 0) {
      setQty(qty - 1);
      product.qty = qty;
      dispatch(removeItemFromCart(product));
    } else {
      productQtyHandler(0);
    }
  };
  const addItemHandler = () => {
    setQty(qty + 1);
    product.qty = qty;
    dispatch(addItemToCart(product));
  };
  return (
    <>
      <button
        type="button"
        onClick={removeItemHadler}
        style={{ width: '2rem', cursor: 'pointer' }}
      >
        -
      </button>
      <span
        style={{
          color: '#000',
          background: '#fff',
          padding: '0.3rem 0.6rem',
          borderRadius: '7px',
          margin: '0 0.4rem ',
          fontSize: '1.2rem',
        }}
      >
        {qty}
      </span>
      <button
        onClick={addItemHandler}
        style={{ width: '2rem', cursor: 'pointer' }}
        type="button"
      >
        +
      </button>
    </>
  );
};

export default QtyItemsHandler;
