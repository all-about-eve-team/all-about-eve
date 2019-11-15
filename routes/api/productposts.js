const router = require("express").Router();
const productPostsController = require("../../controllers/productPostsController");

// /api/productposts/
router
.route("/")
  .get(productPostsController.findAll)
  .post(productPostsController.create);

// /api/productposts/:id
router
  .route("/:id")
  .get(productPostsController.findById)
  .put(productPostsController.update)
  .delete(productPostsController.remove);

// /api/productposts/:category
router
  .route("/:category")
  .get(productPostsController.findByCategory)

module.exports = router;