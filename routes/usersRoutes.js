import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getUsers,
  getUserById,
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/usersController.js';

router.route('/').get(getUsers).post(registerUser);
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route('/:id').get(getUserById);
export default router;
