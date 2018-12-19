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
router.get('/:post_id', auth.editAuthentication, (request, response, next) => {
  let post_id = request.params.post_id;

  Promise.all([Item.getItemById(post_id), Item.getItemCategories(), Item.getMeetingPlaces()])
    .then(([current_item, categories, meeting_places]) => {
      response.render('pages/edit', {
        title: "GatorTrade - Create New Post",
        item: current_item,
        categories: categories,
        meeting_places: meeting_places
      });
    }).catch(err => {console.log(err);});
});

// Edit a Post
router.post('/:post_id', upload.single('image'), (request, response, next) => {
  const item_id = request.params.post_id;
  const { title, description, price, category, meeting_place } = request.body;
  const image_path = request.file.path;

  // Upload new image to Cloudinary service
  cloudinary.uploader.upload(image_path, (result) => {
    const image_link = result.secure_url;
    const public_id = result.public_id;

    Item.getItemById(item_id).then((current_item) => {
      const old_public_id = current_item.public_id;

      // Delete Old Item Image from Storage - Default Seeds might not have public ID
      if(old_public_id) {
        cloudinary.uploader.destroy(old_public_id, { invalidate: true }, (error, result) => {
          console.log(result, error); // Print Errors if Any
        });
      }

      // Update Item in Database with new values
      Item.updateItem(item_id, title, description, price, category, meeting_place, image_link, public_id)
      .then( (errors) => {
        request.flash('success_msg', "Updated! Your post is now pending admin review. Check again within 24 hours.");
        response.redirect('/user');
        
        // Below are errors if any of the Promise calls fail
      }).catch(err => { console.log(err);});
    }).catch(err => { console.log(err);});
  }).catch(err => { console.log(err);});
});

module.exports = router;