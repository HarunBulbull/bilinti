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

router.get("/admin/:skip/:take/:status", authenticateToken, async (req, res) => {
    try {
        const allNews = req.params.status === "all" ?
            await News.find()
                .sort({ createdAt: -1 })
                .skip(Number(req.params.skip))
                .limit(Number(req.params.take))
                .populate('newAuthor', 'fullName email')
            :
            await News.find({ newStatus: req.params.status })
                .sort({ createdAt: -1 })
                .skip(Number(req.params.skip))
                .limit(Number(req.params.take))
                .populate('newAuthor', 'fullName email')

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


router.get("/homePage", async (req, res) => {
    try {
        const latest = await News.find(
            {newStatus: "Yayınlandı"}, 
            "newTitle newImage newCategory newLink createdAt"
        ).sort({createdAt: -1}).skip(0).limit(10);

        const recentNews = await News.find(
            {newStatus: "Yayınlandı"}, 
            "newTitle newImage newCategory newLink createdAt newViews"
        ).sort({createdAt: -1}).limit(100);
        
        const tops = recentNews.sort((a, b) => b.newViews - a.newViews).slice(0, 20);
        
        res.status(200).json({ 
            message: "Verilere başarıyla ulaşıldı!", 
            data: {latest, tops} 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

module.exports = router;