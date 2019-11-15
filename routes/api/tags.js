const router = require("express").Router();
const tagController = require("../../controllers/tagController");

// /api/tags/
router.route("/")
  .get(tagController.findAll)

module.exports = router;