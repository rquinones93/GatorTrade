// Module used gto update the user's profile picture
const db = require('../connection');

const UPDATE_PROFILE_PICTURE = `UPDATE users SET profile_picture = $2 WHERE email = $1`;

const updateProfilePicture = (email, profile_picture) => {
  // Query the DB and return results
  return db.none(UPDATE_PROFILE_PICTURE, [email, profile_picture]);
};

module.exports = updateProfilePicture;
