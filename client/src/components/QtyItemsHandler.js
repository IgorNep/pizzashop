import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../actions/cartActions';

const QtyItemsHandler = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);

  const cartItems = useSelector((state) => state.cartItems);
  const { items } = cartItems;

  useEffect(() => {
    if (items.length > 0) {
      items.map((item) => item._id === product._id && setQty(item.qty));
    }
  }, [items, product._id]);
  const removeItemHadler = () => {
    if (qty > 0) {
      setQty(qty - 1);
      product.qty = qty;
      dispatch(removeItemFromCart(product));
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
