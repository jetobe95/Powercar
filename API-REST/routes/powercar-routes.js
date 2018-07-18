var express = require('express');
const router = express.Router();
const { getPosts, getComments, getPost, addComment, addPost } = require("../controllers/power-Car-Controller")
router.route("/getPosts")
    .get(getPosts)
router.route("/getPost/:postId")
    .get(getPost)





router.route("/getComments/:postId")
    .get(getComments)
router.route("/addComment/")
    .post(addComment)
router.route("/addPost")
    .post(addPost)

// // .put(updateProduct)
// // .delete(deleteProduct)
module.exports = router;