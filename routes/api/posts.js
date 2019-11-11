const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// /api/posts/
router.route("/")
  .get(postsController.findAll)
  .post(postsController.create);

// /api/posts/:id
router
  .route("/:id")
  // .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

// /api/posts/:category
router
  .route("/:category")
  .get(postsController.findByCategory)

module.exports = router;