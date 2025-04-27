const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const Members = require("../models/Members.js");

router.post("/register", async (req, res) => {
    try {
        const { email, password, fullName } = req.body;
        const lowerEmail = email.toLowerCase();
        const hashedPassword = await bcryptjs.hash(password, 10);
        const existingUser = await Members.findOne({ email: lowerEmail });
        if (existingUser) { return res.status(400).json({ message: "Bu e-posta adresi başka bir kullanıcı tarafından kullanılıyor." }); }
        const newUser = new Members({ fullName, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { password, email } = req.body;
        const lowerEmail = email.toLowerCase();
        const existingUser = await Members.findOne({ email: lowerEmail });
        if (!existingUser) {
            return res.status(400).json({ message: "Kullanıcı bulunamadı!" });
        }
        const isPasswordValid = await bcryptjs.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Yanlış şifre!" });
        }
        const userWithoutPassword = existingUser.toObject();
        delete userWithoutPassword.password;
        res.status(200).json({ message: "Giriş başarılı!", data: userWithoutPassword });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await Members.findById(req.params.id);
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;
        res.status(200).json({ message: "Veriye başarıyla ulaşıldı!", data: userWithoutPassword });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.put("/change/:id", async (req, res) => {
    try {
        const { password, newPassword } = req.body;
        const existingUser = await Members.findById(req.params.id);
        if (!existingUser) {return res.status(400).json({ message: "Kullanıcı bulunamadı!" });}

        const isPasswordValid = await bcryptjs.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Yanlış şifre!" });
        }
        const hashedPassword = await bcryptjs.hash(newPassword, 10);
        await Members.findByIdAndUpdate(req.params.id, { password: hashedPassword });
        
        res.status(200).json({ message: "Şifre değiştirildi!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});


module.exports = router;