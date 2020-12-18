import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../actions/cartActions';
import pizza from '../assets/img/pizza.jfif';

const FoodItem = ({ product }) => {
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
    <div className="card">
      <h3 style={{ fontSize: '1.4rem' }}>{product.name} </h3>

      <form style={{ marginTop: '15px' }}>
        <div
          style={{
            width: '260px',
            borderRadius: '50%',
            position: 'relative',
          }}
        >
          <img
            src={pizza}
            alt="pizza"
            style={{
              maxWidth: '160px',
              height: '160px',
              overflow: 'hidden',
              borderRadius: '50%',
            }}
          />
          <p>
            <span
              style={{
                backgroundColor: 'red',
                padding: '0.3rem',
                borderRadius: '7px',
                color: '#fff',
                transform: 'rotate(5deg)',
                display: 'block',
                width: '80px',
                position: 'absolute',
                top: '0',
                right: '15px',
              }}
            >
              {product.price} UAH
            </span>
          </p>
        </div>

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
