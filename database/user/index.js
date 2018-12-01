// Export user modules to the rest of the application
module.exports = {
  isEmailInUse: require('./isEmailInUse'),
  getUserDataById: require('./getUserDataById'),
  create: require('./create'),
  updateProfilePicture: require('./updateProfilePicture'),
  message: require('./message')
};