import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../actions/cartActions';
import ProgressSteps from '../components/ProgressSteps';

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState(
    `${cart.paymentMethod ? cart.paymentMethod : 'Liqpay'}`
  );

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <>
      <ProgressSteps step1 step2 step3 step4 />
      <FormContainer>
        <h2>Payment Method</h2>
        <form onSubmit={submitHandler}>
          <h3>Select Method</h3>
          <div className="form-group">
            <p>
              <label
                htmlFor="Liqpay"
                style={{
                  background: '#fff',
                  color: '#000',
                  padding: '0.1rem 0.5rem',
                  borderRadius: '10px',
                  marginRight: '1rem',
                }}
              >
                LiqPay
              </label>
              <input
                type="checkbox"
                name="Liqpay"
                id="Liqpay"
                value={paymentMethod}
                checked={paymentMethod === 'Liqpay'}
                onChange={(e) => setPaymentMethod(e.target.name)}
                style={{ fontSize: '2rem' }}
              />
            </p>
          </div>
          <div className="form-group">
            <p>
              <label
                htmlFor="Cash"
                style={{
                  background: '#fff',
                  color: '#000',
                  padding: '0.1rem 0.5rem',
                  borderRadius: '10px',
                  marginRight: '1rem',
                }}
              >
                Pay In Cash
              </label>
              <input
                type="checkbox"
                name="Cash"
                id="Cash"
                value={paymentMethod}
                checked={paymentMethod === 'Cash'}
                onChange={(e) => setPaymentMethod(e.target.name)}
              />
            </p>
          </div>

          <button type="submit" className="btn btn-light">
            Continue
          </button>
        </form>
      </FormContainer>
    </>
  );
};

export default PaymentScreen;
