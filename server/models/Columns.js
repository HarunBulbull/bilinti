const mongoose = require("mongoose");


const ColumnSchema = mongoose.Schema({
    columnAuthor: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    columnTitle: { type: String, required: true },
    columnContent: { type: String, required: true },
    columnStatus: { type: String, required: true, default: "Onay bekliyor"},
}, { timestamps: true })


const Column = mongoose.model("Column", ColumnSchema);
module.exports = Column;