import express from 'express'
import { addNewBook,  getBooks} from '../controller/book.controller';
import validate from '../middleware/validate';
import { addBookSchema } from '../zod.schema/schemas';

const router = express.Router();


router.post ('/', addNewBook);
router.get ('/', validate(addBookSchema) ,getBooks);

export default router;