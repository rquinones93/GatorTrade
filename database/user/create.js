const db = require('../connection');
const bcrypt = require('bcrypt');
const isEmailInUse = require('./isEmailInUse');

const CREATE_USER =
  `INSERT INTO users ( first_name, last_name, email, password, profile_picture ) ` +
  `VALUES ( $1, $2, $3, $4, $5 ) RETURNING *`;

const create = (first_name, last_name, email, password ) => {
  return Promise.all([isEmailInUse(email)])
    .then(([emailUsed]) => {
      let errors = [];

      if(emailUsed) {
        errors.push({ msg: 'Email address is already in use.' });
        return errors;    

      } else {
        bcrypt.hash(password, 10).then(hash => {
          // Returns hashed password
          // Create user with default no custom profile picture
          return db.one(CREATE_USER, [ 
            first_name, last_name, email, 
            hash, "./images/no_profile.png"
          ]);
        });
      }
    }
  );
};

module.exports = create;