const authenticateToken = require('../auth.js');
const Columns = require("../models/Columns.js");
const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();


router.post("/", authenticateToken, async (req, res) => {
    try {
        const newColumn = new Columns(req.body);
        await newColumn.save();
        res.status(201).json({ message: "Yazı başarıyla kaydedildi!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/admin/:skip/:take/:status", authenticateToken, async (req, res) => {
    try {
        const allColumns = req.params.status === "all" ?
            await Columns.find()
                .sort({ createdAt: -1 })
                .skip(Number(req.params.skip))
                .limit(Number(req.params.take))
                .populate('columnAuthor', 'fullName email')
            :
            await Columns.find({ columnStatus: req.params.status })
                .sort({ createdAt: -1 })
                .skip(Number(req.params.skip))
                .limit(Number(req.params.take))
                .populate('columnAuthor', 'fullName email')

        res.status(200).json({ message: "Verilere başarıyla ulaşıldı!", data: allColumns });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/admin/:id", authenticateToken, async (req, res) => {
    try {
        const data = await Columns.findById(req.params.id).populate('columnAuthor', 'fullName email');
        res.status(200).json({ message: "Veriye başarıyla ulaşıldı!", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.put("/:id", authenticateToken, async (req, res) => {
    try {
        const updated = await Columns.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Veriye başarıyla güncellendi!", data: updated });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/homePage", async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const data = await Columns.findOne({
            columnStatus: "Yayınlandı",
            createdAt: { $gte: today, $lt: tomorrow }
        }).populate('columnAuthor', 'fullName');

        res.status(200).json({ message: "Veriye başarıyla ulaşıldı!", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        const deleted = await Columns.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Köşe Yazısı başarıyla silindi!", data: deleted });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/author/:id/:skip/:take/:status", authenticateToken, async (req, res) => {
    try {
        const allColumns = req.params.status === "all" ?
            await Columns.find({ columnAuthor: req.params.id })
                .sort({ createdAt: -1 })
                .skip(Number(req.params.skip))
                .limit(Number(req.params.take))
                .populate('columnAuthor', 'fullName email')
            :
            await Columns.find({ columnAuthor: req.params.id, columnStatus: req.params.status })
                .sort({ createdAt: -1 })
                .skip(Number(req.params.skip))
                .limit(Number(req.params.take))
                .populate('columnAuthor', 'fullName email')

        res.status(200).json({ message: "Verilere başarıyla ulaşıldı!", data: allColumns });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/:skip/:take", async (req, res) => {
    try {
        const data = await Columns.find({ columnStatus: "Yayınlandı" })
            .sort({ createdAt: -1 })
            .skip(Number(req.params.skip))
            .limit(Number(req.params.take))
            .populate('columnAuthor', 'fullName email')

        const total = await Columns.countDocuments();
        res.status(200).json({ message: "Verilere başarıyla ulaşıldı!", data, total });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

module.exports = router;