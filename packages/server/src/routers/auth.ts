import express from 'express';
import loginController from '../controllers/login';
import registerController from '../controllers/register';
import getUserController from '../controllers/getUser';

const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);
router.get('/user', getUserController);

export default router;
