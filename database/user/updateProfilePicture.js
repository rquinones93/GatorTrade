// Module used gto update the user's profile picture
const db = require('../connection');

const UPDATE_PROFILE_PICTURE = `UPDATE users SET profile_picture = $2, profile_picture_public_id = $3 WHERE user_id = $1`;

const updateProfilePicture = (user_id, profile_picture, public_id) => {
  // Query the DB and return results
  return db.none(UPDATE_PROFILE_PICTURE, [user_id, profile_picture, public_id]);
};

module.exports = updateProfilePicture;
