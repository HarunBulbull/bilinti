const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_KEY;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1].replaceAll('"', ''); 
  if (!token) {
    return res.status(401).end();
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token doğrulama hatası:", error);
    return res.status(403).json({ message: "Geçersiz token!" });
  }
};

module.exports = authenticateToken;