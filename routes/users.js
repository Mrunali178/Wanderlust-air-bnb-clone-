const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
const userController = require("../controllers/user.js");
const { saveRedirectUrl} = require("../middileware.js");


router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signupForm));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureFlash:true,failureRedirect:"/login"}),userController.loginAuth);

router.get("/logout",userController.logout)

module.exports = router;