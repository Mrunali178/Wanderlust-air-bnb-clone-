const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require('path');
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");
const Review = require("./models/reviews.js");


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);

main()
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.get('/',(req,res)=>{
    res.send("root is working");
});


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
app.get('/listings',wrapAsync(async (req,res)=>{
    let allListings = await Listing.find();
    // console.log(chats);
    res.render("listings/index.ejs",{allListings});
}));


//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});


//create route
app.post("/listings",validateListing,wrapAsync(async (req,res)=>{
    const newListings= new Listing(req.body.listing);
    await newListings.save();
    res.redirect("/listings");
    })
);


//edit route
app.get("/listings/:id/edit", wrapAsync(async(req,res)=>{
    let {id} =req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

//update route
app.put("/listings/:id",validateListing,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));


//show route

app.get("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} =req.params;
    const listing = await Listing.findById(id);
    // console.log(listing)
    res.render("listings/show.ejs",{listing});
}));

//delete route
app.delete("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

//Reviews post route

app.post("/listings/:id/reviews",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    // res.send("Review added successfully");
    res.redirect(`/listings/${listing._id}`);
}));

// app.get('/testListing',async(req,res)=>{
//     let sampleListing = new Listing({
//         title:"My new Villa",
//         description:"elegant",
//         price:12000,
//         location:"Pimpri, Pune",
//         country:"India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");

// });

// app.all("/*",(req,res,next)=>{
//     next(new ExpressError(404, "Page not found"));
// });

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err,req,res,next)=>{
    const {statusCode=500, message="something went wrong"} = err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).send(message);
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080")
});