import express from 'express';
import loginController from '../controllers/login';
import registerController from '../controllers/register';

const router = express.Router();

router.get('/login', loginController);
router.get('/register', registerController);

export default router;
