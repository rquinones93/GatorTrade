const express = require('express');
const router = express.Router();


router.get('/', (request, response, next) => {
  response.render('pages/signup', {
    title: "GatorTrade - Sign Up"
  });
});

// For Image Upload
var multer = require('multer');
// Configure multer's diskStorage,
// when file is uploaded, create custom name
var storage = multer.diskStorage({
  filename: (request, file, callback) => {
    callback(null, Date.now() + file.originalname);
  }
});

// Any file must have a valid photo extension
var imageFilter = (request, file, cb) => {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

// Create upload variable w/ multer object & configurations
var upload = multer({ storage: storage, fileFilter: imageFilter });

// Set up cloudinary
var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'hx8ztvtac',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Upload Single Image is a middleware function
router.post('/', upload.single('image'), (request, response, next) => {

  const { first_name, last_name, email, password } = request.body;
  const image_path = request.file.path;
  console.log(first_name, last_name, email, password, image_path);

  cloudinary.uploader.upload(image_path, (result) => {
    // add cloudinary url for the user's profile picture
    console.log(result);
    const profile_picture = result.secure_url;

    console.log(profile_picture);
    // User.create([first_name, last_name, email, password, profile_picture], (err, user) => {
    //   if (err) {
    //     request.flash('error', err.message);
    //     return response.redirect('back');
    //   }
      
      response.status(200).send("Out here");
    });
});
module.exports = router;