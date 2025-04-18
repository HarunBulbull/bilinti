const mongoose = require('mongoose');

const cuffSchema = new mongoose.Schema({
    cuffImage: { type: String, required: true },
    cuffPath: { type: String, required: true },
    cuffOrder: { type: Number, required: true }
});

const Cuff = mongoose.model('Cuff', cuffSchema);
module.exports = Cuff;