const authenticateToken = require('../auth.js');
const Contacts = require("../models/Contact.js");
const express = require("express");
const router = express.Router();

const requestTracker = new Map();

const rateLimitMiddleware = (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const currentTime = Date.now(); 
    if (requestTracker.has(ip)) {
        
        const userData = requestTracker.get(ip);
        const timeSinceLastRequest = currentTime - userData.lastRequest;
        const minWaitTime = 60 * 1000; 

        if (timeSinceLastRequest < minWaitTime) {
            return res.status(429).json({ 
                message: "Lütfen yeni bir mesaj göndermeden önce biraz bekleyin.", 
                retryAfter: Math.ceil((minWaitTime - timeSinceLastRequest) / 1000)
            });
        }
        
        if (userData.date === new Date().toDateString() && userData.count >= 5) {
            return res.status(429).json({ 
                message: "Günlük mesaj gönderme limitine ulaştınız. Lütfen yarın tekrar deneyin." 
            });
        }
        
        if (userData.date === new Date().toDateString()) {
            userData.count += 1;
        } else {
            userData.count = 1;
            userData.date = new Date().toDateString();
        }
        
        userData.lastRequest = currentTime;
        requestTracker.set(ip, userData);
    } else {
        requestTracker.set(ip, {
            count: 1,
            lastRequest: currentTime,
            date: new Date().toDateString()
        });
    }
    
    next();
};


setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of requestTracker.entries()) {
        if (now - data.lastRequest > 24 * 60 * 60 * 1000) {
            requestTracker.delete(ip);
        }
    }
}, 60 * 60 * 1000); 

router.post("/", rateLimitMiddleware, async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Lütfen tüm alanları doldurun." });
        }
        
        const newContact = new Contacts(req.body);
        await newContact.save();
        res.status(201).json({ message: "Mesaj başarıyla kaydedildi!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});


router.get("/", authenticateToken, async (req, res) => {
    try {
        const data = await Contacts.find().sort({createdAt: -1});
        res.status(200).json({ message: "Verilere ulaşıldı!", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        const data = await Contacts.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Veri silindi!", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

module.exports = router;