import React from 'react';
import pizza from '../assets/img/pizza.jfif';
import QtyItemsHandler from './QtyItemsHandler';

const FoodItem = ({ product }) => {
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
          <QtyItemsHandler product={product} />
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
            {/* Total: {product.price * qty} UAH */}
          </span>
        </p>
      </form>
    </div>
  );
};

export default FoodItem;
