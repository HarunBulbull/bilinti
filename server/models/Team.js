const mongoose = require("mongoose");


const TeamSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    job: { type: String, required: true },
    biography: { type: String, required: true },
    image: { type: String, required: true },
    order: { type: Number, required: true },
})


const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;