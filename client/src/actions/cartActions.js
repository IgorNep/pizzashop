import {
  ITEM_CART_RESET,
  ITEM_CART_REMOVE,
  ITEM_CART_ADD,
} from '../constants/cartConstants';

export const addItemToCart = (product) => async (dispatch) => {
  try {
    console.log(product);
    dispatch({ type: ITEM_CART_ADD, payload: product });
  } catch (error) {
    console.error('error ');
  }
};

export const removeItemFromCart = (product) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_CART_REMOVE, payload: product });
  } catch (error) {
    console.error('error');
  }
};
