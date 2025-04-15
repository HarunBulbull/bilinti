const mainRoute = require('./routes/index.js');
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const port = 3000;

dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected MongoDb");
    } catch (error) {
        throw error;
    }
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

const corsOptions = {
    origin: '*',
    credentials: true,
};

app.use(cors(corsOptions));


const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ 
            success: false, 
            message: 'Geçersiz API anahtarı' 
        });
    }
    
    next();
};

  

//app.use("/api", authMiddleware, mainRoute);
app.use("/api", mainRoute);

app.listen(port, () => {
    connect();
    console.log(`Server is running at port ${port}.`);
})