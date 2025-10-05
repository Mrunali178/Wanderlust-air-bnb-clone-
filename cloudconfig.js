const coludinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');

coludinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary: coludinary,
    params:{
        folder: "wanderlust_DEV",
        allowedFormats: ['jpeg','png','jpg'],
    },
});

module.exports={
    coludinary,
    storage
}