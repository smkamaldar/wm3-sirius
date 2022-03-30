import { Router } from "express";
import pool from '../db.js'
import passport from "passport";
import bcrypt from "bcrypt";

const router = Router();

router.post("/login",passport.authenticate('local'), (req, res)=>{
    res.json(req.session.passport.user)
})

router.post("/logout", (req, res)=>{
    req.logout();
    res.status(200).send({msg:"log out successfully"})
})

router.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        res.send(hashedPassword)
    } catch (error) {
        res.send(error)
    }
})

export default router;