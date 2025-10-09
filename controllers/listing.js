const Listing = require("../models/listing.js");
const maptilerClient = require("@maptiler/client");
const myToken = process.env.MAP_TOKEN;
maptilerClient.config.apiKey = myToken;


// module.exports.index = async (req,res)=>{
//     let allListings = await Listing.find();
//     res.render("listings/index.ejs",{allListings});
// }

module.exports.index = async (req,res)=>{
    let query = {};
    let search_term = "";
    if(req.query.category && req.query.category.toLowerCase() !== "trending"){
        query.category = req.query.category.toLowerCase();
        search_term = `category: ${req.query.category}`;
    }

    // The search takes precedence and searches across relevant fields.
    if(req.query.q){
        const q = req.query.q.trim();
        const regex = new RegExp(q, 'i'); // 'i' for case-insensitive search
        
        // Search across title, description, location, country
        query = {
            $or: [
                { title: { $regex: regex } },
                { description: { $regex: regex } },
                { location: { $regex: regex } },
                { country: { $regex: regex } },
            ]
        };
        search_term = `search: ${q}`;
    }

    let allListings = await Listing.find(query);
    if(allListings.length === 0){
        let message = `No listings found`;
        if(search_term){
             message = `No listings found for ${search_term}`;
        }
        req.flash("error",message);
        return res.redirect("/listings");
    }
    
    res.render("listings/index.ejs",{allListings});
}



module.exports.renderNewForm = (req,res)=>{

    res.render("listings/new.ejs");
}

module.exports.showListing = async(req,res)=>{
    let {id} =req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","Cannot find that listing");
        return res.redirect("/listings");
    }
    // console.log(listing)
    res.render("listings/show.ejs",{listing});
}

module.exports.createListing = async (req,res)=>{
    const result = await maptilerClient.geocoding.forward(req.body.listing.location);
    console.log(result.features[0].geometry);

    let url = req.file.path;
    let filename = req.file.filename;
    const newListings= new Listing(req.body.listing);
    newListings.owner=req.user._id;
    newListings.image={url,filename};
    newListings.geometry=result.features[0].geometry;
    let sdavedListing = await newListings.save();
    console.log(sdavedListing);
    req.flash("success","Successfully made a new listing");
    res.redirect("/listings");
};

module.exports.editListing = async(req,res)=>{
    let {id} =req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing not found");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing, originalImageUrl});
}

module.exports.updateListing = async(req,res)=>{
    let {id} = req.params;
    let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }
    req.flash("success","Listing updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Successfully deleted listing!");
    res.redirect("/listings");
}