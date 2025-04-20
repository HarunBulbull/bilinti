const mongoose = require("mongoose");


const UsersSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    tokenVersion: { type: Number, default: 0 }
}, { timestamps: true })


const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;