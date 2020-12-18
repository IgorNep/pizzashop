import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_BY_CATEGORY_FAIL,
  GET_PRODUCT_BY_CATEGORY_REQUEST,
} from '../constants/productsConstants';

import axios from 'axios';

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};

export const getProductByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_BY_CATEGORY_REQUEST });

    const { data } = await axios.get(`/api/products/${category}`);
    console.log(category);

    dispatch({ type: GET_PRODUCT_BY_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_BY_CATEGORY_FAIL, payload: error });
  }
};

export const addItemToCart = (qty) => async (dispatch) => {
  try {
    console.log(qty);
  } catch (error) {
    console.error('error');
  }
};
