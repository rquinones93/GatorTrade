// Password form input validation for changing password
module.exports = formValidation = request => {
    request.checkBody('password', 'Password must be 8-32 characters long.').len(8, 32);
    request.checkBody('confirmpassword', 'Password must be 8-32 characters long.').len(8, 32);
    request.checkBody('confirmpassword', 'Passwords do not match.').equals(request.body.password);
    return request.validationErrors();
};