import express from "express";
import { Router } from "express";
import pool from "../db/db.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwtGenerator.js";

const router = Router();

router.post("/register", async(req, res)=>{
   
    try {
        const {first_name, last_name, email, password} = req.body
       
        const user = await pool.query("SELECT * FROM users WHERE email = $1" , [email])
       if(user.rows.length > 0){
            return res.status(401).send("User already exist")
       }

       const saltRounds = 10;

       const salt = await bcrypt.genSalt(saltRounds);

       const hashedPassword = await bcrypt.hash(password, salt);

       const newUser = await pool.query("INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *", [first_name, last_name, email, hashedPassword])
       
    //    res.json(newUser.rows[0])

       const token = jwtGenerator(newUser.rows[0].id)

       res.json(token)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error");
    }
   
})


router.post("/login", async(req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1" , [email])
       if(user.rows.length <= 0){
            return res.status(401).send("email or password is incorrect")
       }

       const comparePassword = await bcrypt.compare(password, user.rows[0].password)
       console.log(comparePassword)

       if (!comparePassword) {
        return res.status(401).send("Email or password is incorrect"); // Return to stop execution
      }

       const token = jwtGenerator(user.rows[0].id)
       

       res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60*60*1000,
       });
       return res.status(200).json({message:"Login successful"});
    

        
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error");
    }  
})

router.post("/logout", (req,res)=>{
    console.log("logout")
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
    })

    return res.status(200).json({message: "Logged out successfully"})
})



export default router;