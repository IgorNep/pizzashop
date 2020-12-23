import {
  ITEM_CART_ADD,
  ITEM_CART_REMOVE,
  ITEM_CART_RESET,
  ITEM_CART_FULL_REMOVE,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ITEM_CART_ADD:
      return {
        ...state,
        cartItems: state.cartItems.find(
          (item) => item._id === action.payload._id
        )
          ? state.cartItems.map(
              (item) =>
                (item = item._id === action.payload._id ? action.payload : item)
            )
          : [...state.cartItems, action.payload],
      };
    case ITEM_CART_REMOVE:
      return {
        cartItems: state.cartItems.find(
          (item) => action.payload.qty > 0 && item._id === action.payload._id
        )
          ? state.cartItems.map(
              (item) =>
                (item = item._id === action.payload._id ? action.payload : item)
            )
          : state.cartItems.filter((item) => item._id !== action.payload._id),
      };
    case ITEM_CART_FULL_REMOVE:
      return {
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    case CART_SAVE_SHIPPING_ADDRESS: {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    }
    case CART_SAVE_PAYMENT_METHOD: {
      return {
        ...state,
        paymentMethod: action.payload,
      };
    }
    case ITEM_CART_RESET:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};
