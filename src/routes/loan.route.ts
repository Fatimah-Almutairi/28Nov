import express from 'express'
import { addNewLoan, getLoans, loanBook } from '../controller/loan.controller';
import validate from '../middleware/validate';
import { addLoanSchema } from '../zod.schema/auth.schema';

const router = express.Router();

router.post ('/', validate (addLoanSchema), addNewLoan);
router.get ('/', getLoans);
router.get('/user/loan/:userid', loanBook);


export default router;