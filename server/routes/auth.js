import { Router } from "express";
import passport from "passport";

const router = Router();

router.post("/login",passport.authenticate('local'), (req, res)=>{
    res.json(req.session.passport.user)
})

router.post("/logout", (req, res)=>{
    req.logout();
    res.status(200).send({msg:"log out successfully"})
})



export default router;