const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const auth = require("../controllers/middleware");

router.post("/sign-up", userController.postSignup);

router.post("/login", userController.postLogin);

router.get("/", auth.user, userController.getUser);

router.post("/image", userController.postImage);

module.exports = router;
