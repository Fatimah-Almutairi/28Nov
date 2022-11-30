import express from 'express'
import { admin, getAllUser, loginHandler, registerHandler, user } from '../controller/user.controller';
import {authorized, protect } from '../middleware/protect';
import validate from '../middleware/validate';
import { loginSchema, registerSchema } from '../zod.schema/auth.schema';

const router = express.Router();

router.post ('/login', validate (loginSchema), loginHandler);
router.post ('/register', validate(registerSchema), registerHandler);
router.get('/',protect, getAllUser);
router.get('/admin',protect,authorized ('ADMIN'), admin);
router.get('/user',protect,authorized ('USER'), user);


export default router;