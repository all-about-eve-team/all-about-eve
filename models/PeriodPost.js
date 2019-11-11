const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const periodPostSchema = new Schema({
    // documents belonging to schema
    title: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now},
    active: { type: Boolean, default: true},
    image: {type: String, required: true},
    // Nora comment 11/9/19: changing category type to string temporarily since we haven't built how the drop down menu is going to look - just want to have something in there
    productCategory: {type: String, required: true},
    // documents belonging to other collections
    periodComments: [{type: Schema.Types.ObjectId, ref: "PeriodComment"}]
});

const PeriodPost = mongoose.model("PeriodPost", periodPostSchema);
module.exports = PeriodPost;