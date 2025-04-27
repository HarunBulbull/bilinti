const mongoose = require("mongoose");


const MemberSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true })


const Members = mongoose.model("Members", MemberSchema);
module.exports = Members;