// Export user modules to the rest of the application
module.exports = {
  isEmailInUse: require('./isEmailInUse'),
  getUserDataById: require('./getUserDataById'),
  getUserDataByEmail: require('./getUserDataByEmail'),
  create: require('./create'),
  message: require('./message')
};