var express = require('express');
const router = express.Router();
const {getPosts,getComments}=require("../controllers/power-Car-Controller")
router.route("/getPosts")
    .get(getPosts)
   // .post(addProduct)



// router.route("/:id")
 router.route("/getComments/:postId")
.get(getComments)
// // .put(updateProduct)
// // .delete(deleteProduct)
module.exports = router;