const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const periodCommentSchema = new Schema({
    // documents belonging to schema
    text: {type: String, required: true},
    date: {type: Date, default: Date.now}
    // documents belonging to other collections
});

const PeriodComment = mongoose.model("PeriodComment", periodCommentSchema);
module.exports = PeriodComment;