const db = require('../connection');
const bcrypt = require('bcrypt');
// Checks to see if the Email is already registered
const UPDATE_PASSWORD = 'UPDATE users SET password = $1 WHERE email = $2 AND first_name = $3 AND last_name = $4';
//secret included update
//const UPDATE_PASSWORD2 = 'UPDATE users SET password = $1 WHERE email = $2 AND first_name = $3 AND last_name = $4 AND secret = $5';

const CHECK_USEREXISTS = 'SELECT user_id FROM users WHERE email = $1 AND first_name = $2 AND last_name = $3';
//secret included check
//const CHECK_USEREXISTS2 = 'SELECT user_id FROM users WHERE email = $1 AND first_name = $2 AND last_name = $3 AND secret = $4';


const recoverPassword = (newpassword, inputEmail, inputfirstname, inputlastname) => {
    return bcrypt.hash(newpassword, 10).then(hash => {
        // Updates Hashed Password
        db.query(UPDATE_PASSWORD, [hash, inputEmail, inputfirstname, inputlastname]);
        //returns check for user that was updated, returnobject.length = 1 means is was found and updated
        return db.query(CHECK_USEREXISTS, [inputEmail, inputfirstname, inputlastname]);
    });
};

//if secret is implemented
/*const recoverPassword = (inputEmail, inputfirstname, inputlastname, newpassword, secret) => {
    return bcrypt.hash(newpassword, 10).then(hash => {
        // Updates Hashed Password
        db.query(UPDATE_PASSWORD2, [hash, inputEmail, inputfirstname, inputlastname, secret]);
        //returns check for user that was updated, returnobject.length = 1 means is was found and updated
        return db.query(CHECK_USEREXISTS2, [inputEmail, inputfirstname, inputlastname, secret]);
    });;
};*/

module.exports = recoverPassword;