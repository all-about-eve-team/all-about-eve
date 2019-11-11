const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const postSchema = new Schema({
    // documents belonging to schema
    author: {type: String, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now},
    active: { type: Boolean, default: true},
    // Nora comment 11/9/19: changing category type to string temporarily since we haven't built how the drop down menu is going to look - just want to have something in there
    category: {type: String, required: true},
    // documents belonging to other collections
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;