const express = require('express');
const router = express.Router();
const { User } = require('../database');


router.get('/', (request, response, next) => {
  response.render('pages/signup', {
    title: "GatorTrade - Sign Up"
  });
});

// For Image Upload
let multer = require('multer');
// Configure multer's diskStorage,
// when file is uploaded, create custom name
let storage = multer.diskStorage({
  filename: (request, file, callback) => {
    callback(null, Date.now() + file.originalname);
  }
});

// Any file must have a valid photo extension
let imageFilter = (request, file, cb) => {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

// Create upload variable w/ multer object & configurations
let upload = multer({ storage: storage, fileFilter: imageFilter });

// Set up cloudinary
let cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'hx8ztvtac',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Upload Single Image is a middleware function
router.post('/', upload.single('image'), (request, response, next) => {
  // Get Sign Up Form Data
  const { first_name, last_name, email, password } = request.body;
  const image_path = request.file.path;
  
  // Upload Profile Picture
  cloudinary.uploader.upload(image_path, (result) => {
    // Add Cloudinary url for the user's profile picture
    const profile_picture = result.secure_url;
    // Save Public ID for potential delete if errors exist
    const public_id = result.public_id;

    // Create User
    User.create(first_name, last_name, email, password, profile_picture).then(errors => {
      if (errors) {
        // Delete picture just uploaded
        cloudinary.v2.uploader.destroy(public_id, { invalidate: true }, (error, result) => {
          console.log(result, error, "Profile Picture Deleted.");
        });
        renderErrors(response, errors);

      } else {

        request.flash('success_msg', "Congrats! You're registered!");
        response.redirect('/signup'); // TODO: Change this to whatever a user can access after login

      }
    }).catch(err => { console.log(err); });
  }).catch( err => { console.log(err); });

});

let renderErrors = (response, errors) => {
  response.render('pages/signup', {
    title: 'GatorTrade - Sign Up',
    errors: errors
  });
};

module.exports = router;