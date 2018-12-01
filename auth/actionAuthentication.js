const userDashBoardAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  } else {
    request.flash('error', 'You must login to see the User Dashboard.');
    response.redirect('/login');
  }
};

const postAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  } else {
    request.flash('error', 'You must login to post an item for sale.');
    response.redirect('/login');
  }
};

const messageAuthentication = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  } else {
    request.flash('error', 'You must login to message the seller.');
    response.redirect('/login');
  }
};

module.exports = {
  userDashBoardAuthentication: userDashBoardAuthentication,
  postAuthentication: postAuthentication,
  messageAuthentication: messageAuthentication
};