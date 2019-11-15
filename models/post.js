const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const postSchema = new Schema({
    // documents belonging to schema
    title: {type: String, required: true},
    text: {type: String, required: true},
    category: {type: String, required: true},
    date: {type: Date, default: Date.now},
    active: { type: Boolean, default: true},
    author: {type: String},
    // documents belonging to other collections
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    authorid: {type: Schema.Types.ObjectId, ref: "User"}
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;