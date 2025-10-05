const express = require('express');
const router = express.Router({mergeParams:true});
const Review = require("../models/reviews.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { validateReview,isLoggedIn,isAuthor } = require("../middileware.js");

//Reviews post route

router.post("/",isLoggedIn,validateReview,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","New review created!");
    // res.send("Review added successfully");
    res.redirect(`/listings/${listing._id}`);
}));

//Reviews delete route
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(async(req,res)=>{
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted!");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;