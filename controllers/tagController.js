const db = require("../models");

module.exports = {
  findAllTag: function (req, res) {
    //GGRE--> For debugging
    console.log("req.query--> ", req.query);
    db.Tag
      .find(req.query)
      .sort({name: 1})                      // Tags names in ascending order
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
