const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    // documents belonging to schema
    text: {type: String, required: true},
    date: {type: Date, default: Date.now},
    author: {type: String},
    // documents belonging to other collections 
    authorid: {type: Schema.Types.ObjectId, ref: 'User'},
    post: {type: Schema.Types.ObjectId, ref: 'Post'}

});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;