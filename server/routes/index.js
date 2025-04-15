const express = require("express");
const router = express.Router();

const UsersRoute = require('./users.js');


router.use("/users", UsersRoute);


module.exports = router;