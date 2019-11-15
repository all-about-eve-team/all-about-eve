const db = require("../models");
module.exports = {
    findAll: function (req, res) {
        db.ProductPost
            .find(req.query)
            .sort({ date: -1 })
            .populate("productComments")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.ProductPost
            .findById({_id: req.params.id})
            .populate("productComments")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCategory: function (req, res) {
        db.ProductPost
            .findById({productCategory: req.params.productCategory})
            .populate("productComments")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.ProductPost
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.ProductPost
            .findOneAndUpdate({ _id: req.params.id }, {$push: req.body}, {new:true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.ProductPost
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
