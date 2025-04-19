const express = require("express");
const router = express.Router();

const UsersRoute = require('./users.js');
const NewsRoute = require('./news.js');
const ImageRoute = require("./image.js");
const CuffRoute = require("./cuffs.js");
const ColumnRoute = require("./column.js");


router.use("/users", UsersRoute);
router.use("/news", NewsRoute);
router.use("/image", ImageRoute);
router.use("/cuff", CuffRoute);
router.use("/column", ColumnRoute);


module.exports = router;