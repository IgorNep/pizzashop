import express from 'express';
const router = express.Router();
import {
  getUsers,
  getUserById,
  addNewUser,
} from '../controllers/usersController.js';

router.route('/').get(getUsers).post(addNewUser);
router.route('/:id').get(getUserById);
export default router;
