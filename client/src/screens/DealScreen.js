import React from 'react';

const DealScreen = ({ match }) => {
  return (
    <div>
      <h2>Our Deal</h2>
      <h3>Buy 2 {match.params.category}s - Get 1 free</h3>
    </div>
  );
};

export default DealScreen;
