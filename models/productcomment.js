// schema for comments on the Product page

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productCommentSchema = new Schema({
    // documents belonging to schema
    author: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now},
    active: {type: Boolean, default: true},
    // documents belonging to other collections
    authorid: {type: Schema.Types.ObjectId, ref: 'User'},
    post: {type: Schema.Types.ObjectId, ref: 'ProductPost'}
});

const ProductComment = mongoose.model("ProductComment", productCommentSchema);
module.exports = ProductComment;