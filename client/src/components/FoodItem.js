import React, { useState } from 'react';
import pizza from '../assets/img/pizza.jfif';
import QtyItemsHandler from './QtyItemsHandler';

const FoodItem = ({ product }) => {
  const [qty, setQty] = useState(0);
  const productQtyHandler = (qtyData) => {
    if (qtyData > 0) {
      setQty(qtyData);
    }
    if (qtyData === 0) {
      setQty(0);
    }
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
                border: '2px solid #000',
              }}
            >
              {product.price} UAH
            </span>
          </p>
        </div>

        <p style={{ margin: '1.4rem 0' }}>
          <QtyItemsHandler
            product={product}
            productQtyHandler={productQtyHandler}
          />
        </p>
        <p>
          <span
            style={{
              backgroundColor: 'red',
              padding: '0.3rem 0 0.3rem 0.3rem',
              borderRadius: '7px',
              color: '#fff',
              border: '2px solid #000',
            }}
          >
            Total:{' '}
            <span
              style={{
                background: '#fff',
                color: '#000',
                padding: '0.3rem',
                borderTopRightRadius: '7px',
                borderBottomRightRadius: '7px',
                border: '2px solid #000',
              }}
            >
              {product.price * qty} UAH
            </span>{' '}
          </span>
        </p>
      </form>
    </div>
  );
};

export default FoodItem;
