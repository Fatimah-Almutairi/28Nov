import express from 'express'
import { addNewLoan, getLoans } from '../controller/loan.controller';
import validate from '../middleware/validate';
import { addLoanSchema } from '../zod.schema/schemas';

const router = express.Router();

router.post ('/', validate (addLoanSchema), addNewLoan);
router.get ('/', getLoans);


export default router;