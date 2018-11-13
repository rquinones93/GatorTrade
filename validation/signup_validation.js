// Sign Up form input validation
module.exports = formValidation = request => {
  request.checkBody('email', 'Email is not valid.').isEmail().isAlphanumeric();
  request.checkBody('email', 'Not a valid SFSU email.').contains('@mail.sfsu.edu').isAlphanumeric();
  request.checkBody('password', 'Password must be 8-32 characters long.').len(8, 32).isAlphanumeric();
  request.checkBody('confirmpassword', 'Password must be 8-32 characters long.').len(8, 32).isAlphanumeric();
  request.checkBody('confirmpassword', 'Passwords do not match.').equals(request.body.password).isAlphanumeric();
  return request.validationErrors();
};