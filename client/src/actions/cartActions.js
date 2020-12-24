import {
  ITEM_CART_REMOVE,
  ITEM_CART_ADD,
  ITEM_CART_FULL_REMOVE,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';

export const addItemToCart = (product) => async (dispatch, getState) => {
  try {
    product.qty += 1;
    dispatch({
      type: ITEM_CART_ADD,
      payload: { ...product, product: product._id },
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error(('error 123', error));
  }
};

export const removeItemFromCart = (product) => async (dispatch, getState) => {
  try {
    if (product.qty > 0) {
      product.qty -= 1;
    }
    dispatch({ type: ITEM_CART_REMOVE, payload: product });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error('error');
  }
};

export const removeFullItemFromCart = (product) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: ITEM_CART_FULL_REMOVE, payload: product });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error('Error');
  }
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
export const savePaymentMethod = (method) => async (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: method });
  localStorage.setItem('paymentMethod', JSON.stringify(method));
};
