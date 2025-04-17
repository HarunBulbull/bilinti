const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authenticateToken = require('../auth.js');
const Users = require("../models/Users.js");
const dotenv = require("dotenv");

dotenv.config();


const JWT_SECRET_KEY = process.env.JWT_KEY;

router.post("/", authenticateToken, async (req, res) => {
    try {
        const { email, password, fullName, role } = req.body;
        const lowerEmail = email.toLowerCase();
        const hashedPassword = await bcryptjs.hash(password, 10);
        const existingUser = await Users.findOne({ email: lowerEmail });
        if (existingUser) { return res.status(400).json({ message: "Bu e-posta adresi başka bir kullanıcı tarafından kullanılıyor." }); }
        const newUser = new Users({ fullName, email, password: hashedPassword, role });
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
        const existingUser = await Users.findOne({ email: lowerEmail });
        if (!existingUser) {
            return res.status(400).json({ message: "Kullanıcı bulunamadı!" });
        }
        const isPasswordValid = await bcryptjs.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Yanlış şifre!" });
        }

        const token = jwt.sign(
            {
                userId: existingUser._id,
                email: existingUser.email,
            },
            JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );

        const userWithoutPassword = existingUser.toObject();
        delete userWithoutPassword.password;
        res.status(200).json({ message: "Giriş başarılı!", data: userWithoutPassword, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.put("/:id", authenticateToken, async (req, res) => {
    try {
        let hashedPassword = "";
        let data = req.body
        if (req.body.password) {
            hashedPassword = await bcryptjs.hash(req.body.password, 10);
            data = { ...data, password: hashedPassword }
        }
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, data)
        res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu!", data: updatedUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
});

router.get("/", authenticateToken, async (req, res) => {
    try {
        const userList = await Users.find().sort({ fullName: 1 });
        const filteredList = userList.map((u) => {
            return {
                _id: u._id,
                name: u.fullName,
                mail: u.email,
                role: u.role === "admin" ? "Admin" : (u.role === "baseditor" ? "Baş Editör" : "Yazar")
            }
        })
        res.status(200).json({ message: "Verilere başarıyla ulaşıldı!", data: filteredList });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
})

router.get("/:id", authenticateToken, async (req, res) => {
    try {
        const userData = await Users.findById(req.params.id);
        const filteredData = {
            _id: userData._id,
            name: userData.fullName,
            mail: userData.email,
            role: userData.role
        }
        res.status(200).json({ message: "Verilere başarıyla ulaşıldı!", data: filteredData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
})

router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Kullanıcı başarıyla silindi!", data: deletedUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There is an error: " + error });
    }
})

module.exports = router;