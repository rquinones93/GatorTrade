const express = require('express');
const router = express.Router();
const auth = require('../auth/actionAuthentication');
let cloudinary = require('cloudinary');
let multer = require('multer');
const { Item, User } = require('../database');

// Set up cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// The following code is needed for image upload
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

// Routes
router.get('/', auth.userDashBoardAuthentication, (request, response, next) => {
  
  //need to check the user logged in for sellerID in the future
  let seller_id = request.user.user_id;

  Promise.all([User.selectMessages(seller_id), User.selectPosts(seller_id), User.getUserDataById(seller_id)])
    .then(([messages, posts, user]) => {
      response.render('pages/user', {
        title: "GatorTrade - User",
        messages: messages,
        posts: posts,
        name: `${request.user.first_name} ${request.user.last_name}`,
        profile_picture: user.profile_picture
      });
    }).catch(err => {console.log(err);});
});

// Messages Tab - Read Message
router.post('/read', (request, response, next) => {
  let message = request.body;
  User.readMessage(message.message_id) 
    .then( () => {
      request.flash('success_msg', 'Messasge has been marked as read.');
      response.redirect('/user');
  }).catch(err => {console.log(err);});
});

// Messages Tab - Remove Message
router.post('/remove', (request, response, next) => {
  let message = request.body;
  User.removeMessage(message.message_id) 
    .then( () => {
      request.flash('success_msg', 'Messasge has been deleted.');
      response.redirect('/user');
  }).catch(err => {console.log(err);});
});

// Posts Tab - Remove Post
router.get('/remove_post/:post_id', auth.removePostAuthentication, (request, response, next) => {
  let item_id = request.params.post_id;

  Item.getItemById(item_id)
  .then((item) => {

    // Remove Item's Image from Cloudinary
    if (item.public_id != '') {
      cloudinary .uploader.destroy(item.public_id, { invalidate: true}, (error, result) => {
        console.log(result, error); // Print Errors if Any
      });
    }

    // Remove Item from DB
    Item.removeItemByItemId(item_id)
    .then(() => {
      request.flash('success_msg', 'Your post has been deleted.');
      response.redirect('/user');
      
      }).catch(err => {console.log(err);});
    }).catch(err => {console.log(err);});
});

// Not Priority
// Update Profle Picture
// Get Current Profile Picture + Public ID
// Upload and Update
// Delete Old
// Redirect to Settings Tab
router.post('/update_profile_picture', upload.single('image'), (request, response, next) => {
  const user_id = request.user.user_id;
  const image_path = request.file.path;

  User.getUserDataById(user_id)
  .then((user) => {
    // If old_profile_picture_id is empty assume seeder user or new user w/ default picture
    let old_profile_picture_id = user.profile_picture_public_id;

    // If the user has an old_profile_picture_id, their profile picture is already hosted
    // on cloudinary and we need to delete it from our cloudinary account
    // before uploading a new picture.
    if(old_profile_picture_id != "") {
      // Remove image with specified public id
      cloudinary.uploader.destroy(old_profile_picture_id, function (error, result) {
        console.log(result, error);
      });
    } 

    // Upload new image
    cloudinary.uploader.upload(image_path, (result) => {
      const image_link = result.secure_url;
      const public_id = result.public_id;

      // Update user table DB with new profile picture values
      User.updateProfilePicture(user.user_id, image_link, public_id)
      .then(() => {
        request.flash('success_msg', 'Profile Picture has been updated. View on Settings Tab.');
        response.redirect('/user');
      }).catch(err => {console.log(err);});
    });
  }).catch(err => {console.log(err);});
});

module.exports = router;