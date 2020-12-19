import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getProductsReducer,
  getProductByCategoryReducer,
  topProductsListReducer,
} from './reducers/productReducers';
import { cartItemsReducer } from './reducers/cartReducer';

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getByCategory: getProductByCategoryReducer,
  topProductsList: topProductsListReducer,
  cartItems: cartItemsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
