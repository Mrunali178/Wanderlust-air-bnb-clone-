const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
const userController = require("../controllers/user.js");
const { saveRedirectUrl} = require("../middileware.js");


router.get("/signup",userController.renderSignupForm)

router.post("/signup",wrapAsync(userController.signupForm));


router.get("/login",userController.renderLoginForm);

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureFlash:true,failureRedirect:"/login"}),userController.loginAuth);

router.get("/logout",userController.logout)

module.exports = router;