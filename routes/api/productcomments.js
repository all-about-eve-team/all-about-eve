const router = require("express").Router();
const productCommentsController = require("../../controllers/productCommentsController");

// /api/productcomments/
router.route("/")
  .get(productCommentsController.findAll)
  .post(productCommentsController.create);

// /api/productcomments/:id
router
  .route("/:id")
  .put(productCommentsController.update)
  .delete(productCommentsController.remove);

module.exports = router;