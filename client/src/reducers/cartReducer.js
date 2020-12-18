import {
  ITEM_CART_ADD,
  ITEM_CART_REMOVE,
  ITEM_CART_RESET,
} from '../constants/cartConstants';

export const cartItemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEM_CART_ADD:
      return {
        items: [...state.items, action.payload],
      };
    case ITEM_CART_REMOVE:
      return {
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    case ITEM_CART_RESET:
      return {
        items: [],
      };
    default:
      return state;
  }
};
