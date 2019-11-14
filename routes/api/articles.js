const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// /api/articles/
router.route("/")
  .get(articleController.findAll)

// /api/articles/tags
router.route("/tags")
  .get(articleController.findByTag)

// /api/articles/:tags
router.route("/:tags")
  .get(articleController.findByTag)

module.exports = router;