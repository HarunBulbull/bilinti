const mongoose = require("mongoose");


const CommentSchema = mongoose.Schema({
    commentNew: { type: mongoose.Schema.Types.ObjectId, ref: "News", required: true },
    commentMember: { type: mongoose.Schema.Types.ObjectId, ref: "Members", required: true },
    commentContent: { type: String, required: true },
    commentSubs: { type: Array, default: [] },
}, { timestamps: true })


const Comments = mongoose.model("Comments", CommentSchema);
module.exports = Comments;