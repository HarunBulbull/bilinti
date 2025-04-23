const authenticateToken = require('../auth.js');
const Teams = require("../models/Team.js");
const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();


router.post("/", authenticateToken, async (req, res) => {
    try {
        const newMember = new Teams(req.body);
        await newMember.save();
        res.status(201).json({ message: "Üye başarıyla kaydedildi!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/admin", authenticateToken, async (req, res) => {
    try {
        const members = await Teams.find().sort({order: 1})
        res.status(200).json({ message: "Veriler başarıyla getirildi.", data: members });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/:id", authenticateToken, async (req, res) => {
    try {
        const members = await Teams.findById(req.params.id);
        res.status(200).json({ message: "Veriler başarıyla getirildi.", data: members });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        const deleted = await Teams.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Üye başarıyla silindi!", data: deleted });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.put("/:id", authenticateToken, async (req, res) => {
    try {
        const updated = await Teams.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Üye başarıyla güncellendi!", data: updated });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await Teams.find({}, { _id: 0 }).sort({order: 1});
        res.status(200).json({ message: "Veriler başarıyla getirildi.", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

module.exports = router;