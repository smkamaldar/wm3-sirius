import { Router } from "express";
import { Pool } from "pg";

const router = Router();


router.get("/", async (req, res) => {
    res.send("all stars");
})

router.get("/:starId", async (req, res) => {
    const { starId } = req.params;
    res.send("one star");
})

router.post("/", async (req, res) => {
    const { } = req.body;
    res.send("created");
})

router.delete("/:starId", async (req, res) => {
    const { starId } = req.params;
    res.send("deleted");
})

router.put("/:starId", async (req, res) => {
    const { } = req.body;
    res.send("updated");
})


export default router;