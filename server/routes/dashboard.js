import express from "express"
import { Router } from "express";
import pool from "../db/db.js";


const router = Router();


router.get("/dashboard", async(req, res)=>{
    try {
        if (!req.user) {
          return res.status(403).json({ message: 'Unauthorized access' });
        }
    
        const user = await pool.query(
          'SELECT first_name FROM users WHERE id = $1',
          [req.user]
        );
    
        if (user.rows.length === 0) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.json({ first_name: user.rows[0].first_name });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
      }
    });

export default router;