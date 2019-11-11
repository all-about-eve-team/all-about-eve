const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const periodCommentSchema = new Schema({
    // documents belonging to schema
    author: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now},
    active: {type: Boolean, default: true}
    // documents belonging to other collections
});

const PeriodComment = mongoose.model("PeriodComment", periodCommentSchema);
module.exports = PeriodComment;