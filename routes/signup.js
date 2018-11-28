const express = require('express');
const router = express.Router();
let multer = require('multer');
let cloudinary = require('cloudinary');
const { User } = require('../database');
const formValidation = require('../validation/signup_validation');

// Set Up For Image Upload
// Configure multer's diskStorage, when file is uploaded, create custom name
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
let upload = multer({
  storage: storage,
  fileFilter: imageFilter
});

// Set up cloudinary
cloudinary.config({
  cloud_name: 'hx8ztvtac',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


// Routes
router.get('/', (request, response, next) => {
  response.render('pages/signup', {
    title: "GatorTrade - Sign Up"
  });
});

router.post('/', (request, response, next) => {

  let formErrors = formValidation( request );

  if( formErrors ) { 
    renderErrors(response, formErrors); 

  } else {

    const { first_name, last_name, email, password } = request.body;

    // Create a new user
    User.create(first_name, last_name, email, password)
      .then( errors => {
        if( errors ) { renderErrors(response, errors); }

        // Successful Sign Up
        request.flash('success_msg', "Congrats! You're registered!");
        response.redirect('/signup');

      }).catch(err => { renderErrors( response, err ); });
  }
});

let renderErrors = (response, errors) => {
  response.render('pages/signup', {
    title: 'GatorTrade - Sign Up',
    errors: errors
  });
};

module.exports = router;