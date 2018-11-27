const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../database/user");

passport.serializeUser((user_id, done) => {
  done(null, user_id);
});

passport.deserializeUser((user_id, done) => {
  User.getUserDataById(user_id)
    .then(user => {
      done(null, user);
    })
    .catch(error => {
      done(error);
    });
});

passport.use( new LocalStrategy({
      passReqToCallback: true,
      usernameField: 'email' // username is actually the email, overriding normal mechanism
    },
    (request, username, password, done) => {
      User.getUserDataByEmail(username).then(user => {
        console.log(user);
        if (!user) {
          return done(null, false, { message: "This email address is not in use." });
        }
        bcrypt.compare(password, user.password).then(result => {
          if (result) {
            return done(null, user.user_id);
          } else {
            return done(null, false, { message: "Invalid Password." });
          }
        });
      });
    }
  )
);

module.exports = passport;
