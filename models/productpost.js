// schema for posts on the Product page

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productPostSchema = new Schema({
    // documents belonging to schema
    title: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now},
    active: { type: Boolean, default: true},
    image: {type: String, required: true},
    productCategory: {type: String, required: true},
    author: {type: String},
    productLink: {type: String},
    // documents belonging to other collections
    productComments: [{type: Schema.Types.ObjectId, ref: "ProductComment"}],
    authorid: {type: Schema.Types.ObjectId, ref: "User"}
});

const ProductPost = mongoose.model("ProductPost", productPostSchema);
module.exports = ProductPost;
