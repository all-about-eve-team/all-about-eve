const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    // documents belonging to schema
    author: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now}
    // documents belonging to other collections
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;