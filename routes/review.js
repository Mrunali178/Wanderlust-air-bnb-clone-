const express = require('express');
const router = express.Router({mergeParams:true});
const reviewController = require("../controllers/reviews.js")
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { validateReview,isLoggedIn,isAuthor } = require("../middileware.js");

//Reviews post route

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Reviews delete route
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;