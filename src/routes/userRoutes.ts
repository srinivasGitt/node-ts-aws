import express from 'express';
import { getUsers } from '../controllers/userControllers';

const router = express.Router();

router.get('/users', getUsers);
// router.post('/users', createUser);

export default router;
