const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  // documents belonging to schema
  "itemId": {type: Number, unique: true},
  "type": {type: String},
  "title": {type: String},
  "imageUrl": {type: String},
  "url": {type: String},
  "sections": [
    {
      "title": {type: String},
      "description": {type: String},
      "content": {type: String}
    }
  ],
  "moreInfoTitle": {type: String},
  "moreInfo": [
    {
      "title": {type: String},
      "url": {type: String}
    }
  ],
  "content": {type: String},
  "createdAt": {type: Date, default: Date.now},
  "updatedAt": {type: Date, default: Date.now},
  "tags": {type: Array}
  // documents belonging to other collections
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;