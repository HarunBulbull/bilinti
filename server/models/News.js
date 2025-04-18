const mongoose = require("mongoose");


const NewsSchema = mongoose.Schema({
    newAuthor: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    newTitle: { type: String, required: true },
    newImage: { type: String, required: true },
    newCategory: { type: String, required: true },
    newContent: { type: String, required: true },
    newLink: { type: String, required: true },
    newSEO: { type: Object, required: true },
    newStatus: { type: String, required: true, default: "Onay bekliyor"},
    newViews: { type: Number, default: 0},
}, { timestamps: true })


const News = mongoose.model("News", NewsSchema);
module.exports = News;