const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// /api/articles/
router.route("/")
  .get(articleController.findAll)

// Retrieving Articles filtered by Tags
// /api/articles/:tags
router.route("/:tags")
  .get(articleController.findArticleByTag);

module.exports = router;