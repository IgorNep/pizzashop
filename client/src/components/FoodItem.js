import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../actions/cartActions';

const FoodItem = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);

  const removeItemHadler = () => {
    if (qty > 0) {
      setQty(qty - 1);
      dispatch(removeItemFromCart(product));
    }
  };
  const addItemHandler = () => {
    setQty(qty + 1);
    dispatch(addItemToCart(product));
  };
  return (
    <div className="card">
      <h3 style={{ fontSize: '1.4rem' }}>{product.name} </h3>

      <form style={{ marginTop: '15px' }}>
        <p>
          <span
            style={{
              backgroundColor: 'green',
              padding: '0.3rem',
              borderRadius: '7px',
              color: '#fff',
            }}
          >
            Price: {product.price} UAH
          </span>
        </p>
        <p style={{ margin: '1.4rem 0' }}>
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
        </p>
        <p>
          <span
            style={{
              backgroundColor: 'green',
              padding: '0.3rem',
              borderRadius: '7px',
              color: '#fff',
            }}
          >
            Total: {product.price * qty} UAH
          </span>
        </p>
      </form>
    </div>
  );
};

export default FoodItem;
