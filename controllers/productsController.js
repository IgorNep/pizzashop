import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductByCategory = asyncHandler(async (req, res) => {
  const categoryProducts = await Product.find({
    category: req.params.category,
  });

  if (!categoryProducts) {
    res.status(404);
    throw new Error('Products not found');
  }
  res.json(categoryProducts);
});

const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ sellCount: -1 }).limit(5);
  res.json(products);
});
export { getProducts, getProductByCategory, getTopProducts };
