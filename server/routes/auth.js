import { Router } from "express";
import pool from '../db.js'
import passport from "passport";
import bcrypt from "bcrypt";


const router = Router();



router.post("/login",passport.authenticate('local'), (req, res)=>{
    res.json(req.session.passport.user)
})

<<<<<<< HEAD
=======
router.post("/logout", (req, res)=>{
    req.logout();
    res.status(200).send({msg:"log out successfully"})
})
>>>>>>> 920bffcafe3212aaf55631370f5389931a4d6526

router.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        res.send(hashedPassword)
    } catch (error) {

    }
})

export default router;