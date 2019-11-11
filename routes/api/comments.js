const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// /api/comments/
router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

// /api/comments/:id
router
  .route("/:id")
  .put(commentsController.update)
  .delete(commentsController.remove);

module.exports = router;