const authenticateToken = require('../auth.js');
const Cuffs = require("../models/Cuff.js");
const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();


router.post("/", authenticateToken, async (req, res) => {
    try {
        const newCuff = new Cuffs(req.body);
        await newCuff.save();
        res.status(201).json({ message: "Manşet başarıyla kaydedildi!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/", async (req, res) => {
    try {
        const allCuffs = await Cuffs.find().sort({ cuffOrder: 1 })
        res.status(200).json({ message: "Verilere başarıyla ulaşıldı!", data: allCuffs });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const allCuffs = await Cuffs.findById(req.params.id)
        res.status(200).json({ message: "Verilere başarıyla ulaşıldı!", data: allCuffs });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.put("/:id", authenticateToken, async (req, res) => {
    try {
        const updated = await Cuffs.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Veri başarıyla güncellendi.", data: updated });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});


router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        const deleted = await Cuffs.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Manşet başarıyla silindi!", data: deleted });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

module.exports = router;