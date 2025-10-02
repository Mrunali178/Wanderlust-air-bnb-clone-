const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");
const {isLoggedIn} = require("../middileware.js");

//validation middleware
const validateListing=(req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

//index route
router.get('/',wrapAsync(async (req,res)=>{
    let allListings = await Listing.find();
    // console.log(chats);
    res.render("listings/index.ejs",{allListings});
}));


//new route
router.get("/new",isLoggedIn,(req,res)=>{

    res.render("listings/new.ejs");
});


//create route
router.post("/",isLoggedIn,validateListing,wrapAsync(async (req,res)=>{
    const newListings= new Listing(req.body.listing);
    await newListings.save();
    req.flash("success","Successfully made a new listing");
    res.redirect("/listings");
    })
);


//edit route
router.get("/:id/edit",isLoggedIn, wrapAsync(async(req,res)=>{
    let {id} =req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing not found");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}));

//update route
router.put("/:id",isLoggedIn,validateListing,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing updated!");
    res.redirect(`/listings/${id}`);
}));


//show route

router.get("/:id",wrapAsync(async(req,res)=>{
    let {id} =req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","Cannot find that listing");
        return res.redirect("/listings");
    }
    // console.log(listing)
    res.render("listings/show.ejs",{listing});
}));

//delete route
router.delete("/:id",isLoggedIn,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Successfully deleted listing!");
    res.redirect("/listings");
}));

module.exports = router;