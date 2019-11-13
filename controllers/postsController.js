const db = require("../models");
module.exports = {
    findAll: function (req, res) {
        db.Post
            .find(req.query)
            .sort({ date: -1 })
            .populate("comments")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCategory: function (req, res) {
        db.Post
            .findById({category: req.params.category})
            .populate("comments")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Post
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Post
        .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
