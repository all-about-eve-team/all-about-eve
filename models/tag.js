const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  // documents belonging to schema
  "name": {type: String, required: true},
  "createdAt": {type: Date, default: Date.now},
  "updatedAt": {type: Date, default: Date.now}
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;