import {
  ITEM_CART_REMOVE,
  ITEM_CART_ADD,
  ITEM_CART_FULL_REMOVE,
} from '../constants/cartConstants';

export const addItemToCart = (product) => async (dispatch, getState) => {
  try {
    product.qty += 1;
    dispatch({ type: ITEM_CART_ADD, payload: product });
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
