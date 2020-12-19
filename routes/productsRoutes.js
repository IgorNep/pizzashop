import express from 'express';
const router = express.Router();
import {
  getProductByCategory,
  getProducts,
  getTopProducts,
} from '../controllers/productsController.js';

router.route('/').get(getProducts);
router.route('/top').get(getTopProducts);
router.route('/:category').get(getProductByCategory);
export default router;
