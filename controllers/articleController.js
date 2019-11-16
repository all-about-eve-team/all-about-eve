const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    //GGRE--> For debugging
    //console.log("req.query--> ", req.query);
    db.Article
      .find(req.query)
      .sort({updatedAt: -1})                      // Most recent articles
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findArticleByTag: function (req, res) {
    //GGRE--> For debugging
    console.log("req.body--> ", req.body);
    db.Article
      .find({tags: {$in: req.body.tags.toArray()}})
      //.find({tags: {$in: ["Nutrition", "Screening Tests", "Pregnancy"]}})       //GGRE--> just for testing
      .sort({updatedAt: -1})                      // Most recent articles
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
