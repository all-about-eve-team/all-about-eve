const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  // documents belonging to schema
  "name": {type: String, required: true},
  "createdAt": {type: Date, default: Date.now},
  "updatedAt": {type: Date, default: Date.now}
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;