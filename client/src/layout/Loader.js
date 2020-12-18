import React from 'react';
import loader from './pizza.gif';

const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img
        src={loader}
        alt="Loading..."
        style={{ width: '200px', magin: '0 auto', display: 'block' }}
      />
    </div>
  );
};

export default Loader;
