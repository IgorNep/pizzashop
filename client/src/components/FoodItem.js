import React, { useState } from 'react';

const FoodItem = ({ product }) => {
  const [qty, setQty] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card">
      <h3 style={{ fontSize: '1.4rem' }}>{product.name} </h3>

      <form onSubmit={submitHandler} style={{ marginTop: '15px' }}>
        <p>
          <span
            style={{
              backgroundColor: 'green',
              padding: '0.3rem',
              borderRadius: '7px',
              color: '#fff',
            }}
          >
            {product.price} UAH
          </span>
        </p>
        <p style={{ marginTop: '1.4rem' }}>
          <button
            onClick={() => qty > 0 && setQty(qty - 1)}
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
              margin: '0 0.4rem',
              fontSize: '1.2rem',
            }}
          >
            {qty}
          </span>
          <button
            onClick={() => setQty(qty + 1)}
            style={{ width: '2rem', cursor: 'pointer' }}
          >
            +
          </button>
        </p>
      </form>
    </div>
  );
};

export default FoodItem;
