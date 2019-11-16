const router = require("express").Router();
const commentRoutes = require("./comments");
const postRoutes = require("./posts");
const articleRoutes = require("./articles");
const tagRoutes = require("./tags");
const productPostRoutes = require("./productposts");
const productCommentRoutes = require("./productcomments")

// App routes
router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);
router.use("/productposts", productPostRoutes);
router.use("/articles", articleRoutes);
router.use("/tags", tagRoutes);
router.use("/productcomments",productCommentRoutes);

module.exports = router;