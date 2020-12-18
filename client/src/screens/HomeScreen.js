import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../actions/productsAction';
import Loader from '../layout/Loader';
import SliderComponent from '../components/Slider';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { error, loading, products } = getProducts;

  const categories = [];
  if (products) {
    products.forEach((product) => {
      const categoryExists = categories.find(
        (category) => category === product.category
      );
      if (!categoryExists) {
        categories.push(product.category);
      }
    });
  }

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      {' '}
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>Error</h3>
      ) : (
        <div className="main-content">
          <div className="main-content__menu">
            <h2>
              <i className="fa fa-utensils"></i> Our Menu
            </h2>
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <Link to={`/menu/${category}`}>{category}s</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="main-content__slider">
            <h2>
              <i className="fa fa-medal"></i> Best Sellers
            </h2>
            <SliderComponent />
          </div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
