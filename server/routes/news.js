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
            {_id: 0, newTitle: 1, newImage: 1, newCategory: 1, newLink: 1, createdAt: 1, newViews: 1}
        ).sort({createdAt: 1}).skip(0).limit(10);

        const recentNews = await News.find(
            {newStatus: "Yayınlandı"}, 
            {_id: 0, newTitle: 1, newImage: 1, newCategory: 1, newLink: 1, createdAt: 1, newViews: 1}
        ).sort({createdAt: 1}).limit(100);
        
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

router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        const deleted = await News.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Haber başarıyla silindi!", data: deleted });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});


router.get("/author/:id/:skip/:take/:status", authenticateToken, async (req, res) => {
    try {
        const allNews = req.params.status === "all" ?
            await News.find({newAuthor: req.params.id})
                .sort({ createdAt: -1 })
                .skip(Number(req.params.skip))
                .limit(Number(req.params.take))
                .populate('newAuthor', 'fullName email')
            :
            await News.find({ newAuthor: req.params.id, newStatus: req.params.status })
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

router.get("/link/:link", async (req, res) => {
    try {
        const data = await News.findOne({newStatus: "Yayınlandı", newLink: req.params.link}, {_id: 0, newTitle: 1, newImage: 1, newCategory: 1, createdAt: 1, newViews: 1, newSEO: 1, newLink: 1, newContent: 1, newAuthor: 1}).populate('newAuthor', {_id: 0, fullName: 1});
        if(data){await News.findOneAndUpdate({newLink: req.params.link}, {newViews: data.newViews+1})}
        res.status(200).json({ message: "Veriye başarıyla ulaşıldı!", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

module.exports = router;