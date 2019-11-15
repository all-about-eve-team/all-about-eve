const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// /api/articles/
router.route("/")
  .get(articleController.findAll)

// // /api/articles/:tags                           //GGRE--> Do I need this route for articles+tags?
// router.route("/:tags")
//   .get(articleController.findByTagArticle)

module.exports = router;