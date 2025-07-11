import express from 'express';
import NewUsersController from '../controllers/newUsersController.js';

const router = express.Router();
const newUsersController = new NewUsersController();

router.post('/register', newUsersController.registerUser.bind(newUsersController));
router.get('/:id', newUsersController.getUserDetails.bind(newUsersController));

export default router;