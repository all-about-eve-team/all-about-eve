const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// /api/articles/
router.route("/")
  .get(articleController.findAll);

// /api/articles/:tags          GGRE--> What should be the route for the tags array???
// router.route("/:tags")
//   .get(articleController.findByTag);

module.exports = router;