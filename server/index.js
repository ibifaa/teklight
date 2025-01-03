import express from "express";
import pool from "./db/db.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;



app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.listen(3000, ()=>{
    console.log(`server running on port ${PORT}.`)
})