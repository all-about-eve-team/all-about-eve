const router = require("express").Router();
const periodPostsController = require("../../controllers/periodPostsController");

// /api/periodposts/
console.log("the periodposts route page is reached")
router
.route("/")
  .get(periodPostsController.findAll)
  .post(periodPostsController.create);

// /api/periodposts/:id
router
  .route("/:id")
  // .get(periodpostsController.findById)
  .put(periodPostsController.update)
  .delete(periodPostsController.remove);

// /api/periodposts/:category
// router
//   .route("/:category")
  // .get(periodPostsController.findByCategory)

module.exports = router;