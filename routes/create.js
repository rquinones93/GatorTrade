const express = require('express');
const router = express.Router();
const auth = require('../auth/actionAuthentication');
const { Item } = require('../database');
let multer = require('multer');
let cloudinary = require('cloudinary');

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
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Routes
router.get('/', auth.postAuthentication, (request, response, next) => {
  Promise.all([Item.getItemCategories(), Item.getMeetingPlaces()])
    .then(([categories, meeting_places]) => {
      response.render('pages/create', {
        title: "GatorTrade - Create New Post",
        categories: categories,
        meeting_places: meeting_places
      });
    }).catch(err => {console.log(err);});
});

router.post('/', upload.single('image'), (request, response, next) => {
  const { title, description, price, category, meeting_place } = request.body;
  const seller_id = request.user.user_id;
  const image_path = request.file.path;

  cloudinary.uploader.upload(image_path, (result) => {
    const image_link = result.secure_url;
    const public_id = result.public_id;

    Item.create(seller_id, title, description, price, 
                category, meeting_place, image_link, public_id).then(errors => {
      request.flash('success_msg', "Posted! Your post is now pending admin review. Check again within 24 hours.");
      response.redirect('/user');

    }).catch(err => {console.log(err);});
  }).catch(err => {console.log(err);});
});

module.exports = router;