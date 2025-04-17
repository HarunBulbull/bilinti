const express = require("express");
const router = express.Router();

const UsersRoute = require('./users.js');
const NewsRoute = require('./news.js');
const ImageRoute = require("./image.js");


router.use("/users", UsersRoute);
router.use("/news", NewsRoute);
router.use("/image", ImageRoute);


module.exports = router;