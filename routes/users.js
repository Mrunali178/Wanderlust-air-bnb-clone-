const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl} = require("../middileware.js");




// const validateUser=(req,res,next)=>{
//     let {error} = userSchema.validate(req.body);
    
//     if(error){
//         let errMsg = error.details.map((el)=>el.message).join(",");
//         throw new ExpressError(400,errMsg);
//     }else{
//         next();
//     }
// }

router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
})

router.post("/signup",wrapAsync(async(req,res)=>{
    try{
         let {email, username, password} = req.body;
        let newUser = new User({email, username});
        let registeredUser = await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to Wanderlust");
            res.redirect("/listings");
        })
      
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
   
}));


router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
});

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureFlash:true,failureRedirect:"/login"}), (req,res)=>{
    req.flash("success","Welcome back!");
    // let redirectUrl = req.session.returnTo || "/listings";
    // delete req.session.returnTo;
    res.redirect(res.locals.redirectUrl || "/listings");
});

router.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logged out successfully");
        res.redirect("/listings");
    })
})

module.exports = router;