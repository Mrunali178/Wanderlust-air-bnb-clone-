const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");

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
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs");
});


//create route
router.post("/",validateListing,wrapAsync(async (req,res)=>{
    const newListings= new Listing(req.body.listing);
    await newListings.save();
    res.redirect("/listings");
    })
);


//edit route
router.get("/:id/edit", wrapAsync(async(req,res)=>{
    let {id} =req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

//update route
router.put("/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));


//show route

router.get("/:id",wrapAsync(async(req,res)=>{
    let {id} =req.params;
    const listing = await Listing.findById(id).populate("reviews");
    // console.log(listing)
    res.render("listings/show.ejs",{listing});
}));

//delete route
router.delete("/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

module.exports = router;