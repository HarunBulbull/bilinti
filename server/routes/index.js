const express = require("express");
const router = express.Router();

const UsersRoute = require('./users.js');
const NewsRoute = require('./news.js');
const ImageRoute = require("./image.js");
const CuffRoute = require("./cuffs.js");
const ColumnRoute = require("./column.js");
const TeamRoute = require("./team.js");
const ContactRoute = require("./contact.js");
const MemberRoute = require("./members.js");
const CommentRoute = require("./comments.js");


router.use("/users", UsersRoute);
router.use("/news", NewsRoute);
router.use("/image", ImageRoute);
router.use("/cuff", CuffRoute);
router.use("/column", ColumnRoute);
router.use("/team", TeamRoute);
router.use("/contact", ContactRoute);
router.use("/members", MemberRoute);
router.use("/comments", CommentRoute);



module.exports = router;