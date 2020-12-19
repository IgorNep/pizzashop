import {
  ITEM_CART_REMOVE,
  ITEM_CART_ADD,
  ITEM_CART_FULL_REMOVE,
} from '../constants/cartConstants';

export const addItemToCart = (product) => async (dispatch) => {
  try {
    product.qty += 1;
    dispatch({ type: ITEM_CART_ADD, payload: product });
  } catch (error) {
    console.error('error ');
  }
};

export const removeItemFromCart = (product) => async (dispatch) => {
  try {
    if (product.qty > 0) {
      product.qty -= 1;
    }
    dispatch({ type: ITEM_CART_REMOVE, payload: product });
  } catch (error) {
    console.error('error');
  }
};

export const removeFullItemFromCart = (product) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_CART_FULL_REMOVE, payload: product });
  } catch (error) {
    console.error('Error');
  }
};
