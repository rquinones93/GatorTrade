// Sign Up form input validation
module.exports = formValidation = request => {
  request.checkBody('email', 'Email is not valid.').isEmail();
  request.checkBody('email', 'Not a valid SFSU email.').contains('@mail.sfsu.edu');
  request.checkBody('password', 'Password must be 8-32 characters long.').len(8, 32);
  request.checkBody('confirmpassword', 'Password must be 8-32 characters long.').len(8, 32);
  request.checkBody('confirmpassword', 'Passwords do not match.').equals(request.body.password);
  return request.validationErrors();
};