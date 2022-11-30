import express  from "express";
import userRoute from './routes/user.route'
import 'dotenv/config';
import { connectDB } from "./config/db";
import schoolRoute from "./routes/school.route";

const app = express();
//config
connectDB();

//midlleware
app.use(express.json());
app.use('/api/v1/user', userRoute);
app.use('/api/v1/school', schoolRoute);


app.listen(5000, () => {
    console.log("Server running on port 5000")
})