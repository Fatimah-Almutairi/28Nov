import express  from "express";
import userRoute from './routes/user.route'
import bookRoute from './routes/book.route'
import 'dotenv/config';
import { connectDB } from "./config/db";

const app = express();
//config
connectDB();

//midlleware
app.use(express.json());
app.use('/api/v1/user', userRoute);
app.use('/api/v1/book', bookRoute);


app.listen(5000, () => {
    console.log("Server i running on port 5000")
})