import express from "express";
import pool from "./db/db.js";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js"
import dashboard from "./routes/dashboard.js"
import authentication from "./middleware/authentication.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 3000;



app.use(cors({
    origin: 'http://localhost:5173',  
    credentials: true, }));

                
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) 
app.use(cookieParser())

app.use('/api/admin', adminRoutes)
app.use('/api/auth/', authentication, dashboard)


app.listen(3000, ()=>{
    console.log(`server running on port ${PORT}.`)
})