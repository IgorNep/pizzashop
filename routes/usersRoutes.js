import express from 'express';
const router = express.Router();
import {
  getUsers,
  getUserById,
  addNewUser,
  authUser,
} from '../controllers/usersController.js';

router.route('/').get(getUsers).post(addNewUser);
router.route('/login').post(authUser);
router.route('/:id').get(getUserById);
export default router;
