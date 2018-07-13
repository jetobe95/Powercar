var express = require('express');
const router = express.Router();
const {getPosts,getComments,getPost}=require("../controllers/power-Car-Controller")
router.route("/getPosts")
    .get(getPosts)
router.route("/getPost/:postId")
    .get(getPost)
   // .post(addProduct)



// router.route("/:id")
 router.route("/getComments/:postId")
.get(getComments)
// // .put(updateProduct)
// // .delete(deleteProduct)
module.exports = router;