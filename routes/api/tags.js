const router = require("express").Router();
const tagController = require("../../controllers/tagController");

// /api/tags/
router.route("/")
  .get(tagController.findAllTag)

// Retrieving Articles filtered by Tags                     //GGRE--> Shouldn't this be referenced in the articles controller???
// /api/tags/:tags
router.route("/:tags")
  .get(tagController.findByTagArticle)

module.exports = router;