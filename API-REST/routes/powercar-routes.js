var express = require('express');
const { getPosts, getComments, getPost, addComment, addPost } = require("../controllers/power-Car-Controller")
const login = require("../controllers/login");
const router = express.Router();

router.post("/login", login.SignUp, (req, res) => res.json({ message: "Estas autenticado" }))
router.post("/SignIn", login.SignIn, (req, res) => res.json({ message: "registro Exitoso" }))
router.get("/getPosts", getPosts)

router.get("/getPost/:postId", getPost)
router.get("/getComments/:postId", getComments)
router.post("/addComment/", addComment)
router.post("/addPost", addPost)
module.exports = router;

