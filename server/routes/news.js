const authenticateToken = require('../auth.js');
const News = require("../models/News.js");
const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();


router.post("/", authenticateToken, async (req, res) => {
    try {
        const data = req.body;
        const lowerLink = data.newLink.toLowerCase();
        const existingNew = await News.findOne({ newLink: lowerLink });
        if (existingNew) { return res.status(400).json({ message: "Bu link başka bir haberde kullanılıyor." }); }
        const newNew = new News(data);
        await newNew.save();
        res.status(201).json({ message: "Haber başarıyla kaydedildi!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/admin/:skip/:take", authenticateToken, async (req, res) => {
    try {
        const allNews = await News.find()
            .sort({createdAt: 1})
            .skip(Number(req.params.skip))
            .limit(Number(req.params.take))
            .populate('newAuthor', 'fullName email');
        
        res.status(200).json({ message: "Verilere başarıyla ulaşıldı!", data: allNews });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/admin/:id", authenticateToken, async (req, res) => {
    try {
        const data = await News.findById(req.params.id).populate('newAuthor', 'fullName email');
        res.status(200).json({ message: "Veriye başarıyla ulaşıldı!", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.put("/:id", authenticateToken, async (req, res) => {
    try {
        const updated = await News.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Veriye başarıyla güncellendi!", data: updated });  
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});


module.exports = router;