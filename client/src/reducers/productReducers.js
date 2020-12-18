import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_CATEGORY_REQUEST,
  GET_PRODUCT_BY_CATEGORY_FAIL,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
} from '../constants/productsConstants';

export const getProductsReducer = (
  state = { products: [], loading: true },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductByCategoryReducer = (
  state = { categoryProducts: [], loading: true },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        categoryProducts: action.payload,
        loading: false,
      };
    case GET_PRODUCT_BY_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
