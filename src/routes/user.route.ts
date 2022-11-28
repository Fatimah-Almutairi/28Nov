import express from 'express'
import { addNewUser, getUsers } from '../controller/user.controller';
import validate from '../middleware/validate';
import { addUserSchema } from '../zod.schema/schemas';

const router = express.Router();

router.post ('/', validate (addUserSchema), addNewUser);
router.get ('/', getUsers);




export default router;