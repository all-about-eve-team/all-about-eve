const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Post
      .find(req.query)
      .sort({itemId: -1})                         // Most recent articles first
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  //,
  // findByTag: function (req, res) {
  //   db.Post
  //     .find({tags: req.params.tags})            //GGRE--> Must figure out a way to parse through the tags array to find the articles
  //     .sort({itemId: -1})                   // Most recent articles first
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
