import {
  ITEM_CART_ADD,
  ITEM_CART_REMOVE,
  ITEM_CART_RESET,
} from '../constants/cartConstants';

export const cartItemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ITEM_CART_ADD:
      return {
        items: state.items.find((item) => item._id === action.payload._id)
          ? state.items.map(
              (item) =>
                (item = item._id === action.payload._id ? action.payload : item)
            )
          : [...state.items, action.payload],
      };
    case ITEM_CART_REMOVE:
      return {
        items: state.items.find(
          (item) => action.payload.qty > 0 && item._id === action.payload._id
        )
          ? state.items.map(
              (item) =>
                (item = item._id === action.payload._id ? action.payload : item)
            )
          : state.items.filter((item) => item._id !== action.payload._id),
      };
    case ITEM_CART_RESET:
      return {
        items: [],
      };
    default:
      return state;
  }
};
