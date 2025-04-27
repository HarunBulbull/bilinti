const Comments = require("../models/Comments.js");
const Members = require("../models/Members.js");
const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const newComment = new Comments(req.body);
        await newComment.save();
        res.status(201).json({ message: "Yorum başarıyla kaydedildi!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.post("/sub/:id", async (req, res) => {
    try {
        const comment = await Comments.findById(req.params.id);
        if(!comment){
            res.status(400).json({message: "Yorum bulunamadı."});
        }
        const member = await Members.findById(req.body.member);
        if(!member){
            res.status(400).json({message: "Kullanıcı bulunamadı."});
        }
        const subs = [
            ...comment.commentSubs,
            {
                member: {id: req.body.member, name: member.fullName},
                comment: req.body.value,
                date: new Date()
            },
        ]
        const updated = await Comments.findByIdAndUpdate(req.params.id, {commentSubs: subs})
        res.status(200).json({ message: "Yanıt başarıyla kaydedildi!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/:id/:skip/:take", async (req, res) => {
    try {
        const comments = await Comments.find({commentNew: req.params.id}).sort({createdAt: -1}).skip(Number(req.params.skip)).limit(Number(req.params.take)).populate('commentMember', {_id: 0, fullName: 1});
        const total = await Comments.countDocuments({commentNew: req.params.id});
        res.status(200).json({ message: "Verilere ulaşıldı", comments, total });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

module.exports = router;