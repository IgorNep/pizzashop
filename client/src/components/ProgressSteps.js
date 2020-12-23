import React from 'react';
import { Link } from 'react-router-dom';

const ProgressSteps = ({ step1, step2, step3, step4, step5 }) => {
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
        <Link to="/cart" className="progress__item ">
          Fill the cart
        </Link>
      ) : (
        <span className="progress__item progress__item_disabled">
          Fill the cart
        </span>
      )}
      <div className=" progress__separator"></div>
      {step3 ? (
        <Link to="/shipping" className="progress__item ">
          Shipping
        </Link>
      ) : (
        <span className="progress__item progress__item_disabled">Shipping</span>
      )}
      <div className="progress__separator"></div>
      {step4 ? (
        <Link to="/payment" className="progress__item ">
          Payment
        </Link>
      ) : (
        <span className="progress__item progress__item_disabled">Payment</span>
      )}
      <div className="progress__separator"></div>
      {step5 ? (
        <Link to="/placeorder" className="progress__item ">
          Place Order
        </Link>
      ) : (
        <span className="progress__item progress__item_disabled">
          Place Order
        </span>
      )}
    </div>
  );
};

export default ProgressSteps;
