import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductByCategory } from '../actions/productsAction';
import Loader from '../layout/Loader';
import FoodItem from '../components/FoodItem';

const FoodScreen = ({ match }) => {
  const dispatch = useDispatch();

  const getByCategory = useSelector((state) => state.getByCategory);
  const { error, loading, categoryProducts } = getByCategory;

  useEffect(() => {
    dispatch(getProductByCategory(match.params.category));
  }, [dispatch, match.params.category]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="food-screen">
          {categoryProducts.map((product) => (
            <FoodItem product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default FoodScreen;
