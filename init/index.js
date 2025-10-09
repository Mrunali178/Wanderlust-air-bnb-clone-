const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("../init/data.js");
const MONGO_URL= "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB= async ()=> {
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj, owner: "68dde3adde6587c9d9e5a092",
    geometry: {
      type: "Point",
      // temporary coordinates — Delhi by default
      coordinates: [77.209, 28.6139],
    },
  }));
    
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();