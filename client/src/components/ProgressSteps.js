import React from 'react';
import { Link } from 'react-router-dom';

const ProgressSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="progress">
      {step1 ? (
        <Link to="/login" className="progress__item ">
          Sign In
        </Link>
      ) : (
        <span className="progress__item progress__item_disabled">Sign In</span>
      )}
      <div className=" progress__separator"></div>
      {step2 ? (
        <Link to="/shipping" className="progress__item ">
          Shipping
        </Link>
      ) : (
        <span className="progress__item progress__item_disabled">Shipping</span>
      )}
      <div className="progress__separator"></div>
      {step3 ? (
        <Link to="/payment" className="progress__item ">
          Payment
        </Link>
      ) : (
        <span className="progress__item progress__item_disabled">Payment</span>
      )}
      <div className="progress__separator"></div>
      {step4 ? (
        <Link to="/order" className="progress__item ">
          Place Order
        </Link>
      ) : (
        <span className="progress__item progress__item_disabled">Order</span>
      )}
    </div>
  );
};

export default ProgressSteps;
