const router = require("express").Router();
const commentRoutes = require("./comments");
const postRoutes = require("./posts");
const periodPostRoutes = require("./periodposts");
const contactusRoutes = require("./contactus")
const articlesRoutes = require("./articles");

// App routes
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);
router.use("/periodposts", periodPostRoutes);
router.use("/contactus", contactusRoutes);
router.use("/articles", articlesRoutes);

module.exports = router;