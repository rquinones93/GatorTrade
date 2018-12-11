const db = require('../connection');

// Checks to see if the Email is already registered
const UPDATE_PASSWORD = 'UPDATE users SET password = $1 WHERE email = $2 AND first_name = $3 AND last_name = $4';
//const UPDATE_PASSWORD2 = 'UPDATE users SET password = $1 WHERE email = $2 AND first_name = $3 AND last_name = $4 AND secret = $5';

const recoverPassword = (newpassword, inputEmail, inputfirstname, inputlastname) => {
    return db.query(UPDATE_PASSWORD, [newpassword, inputEmail, inputfirstname, inputlastname]);
};
/*const recoverPassword = (inputEmail, inputfirstname, inputlastname, newpassword, secret) => {
    return db.query(UPDATE_PASSWORD2, [newpassword, inputEmail, inputfirstname, inputlastname, secret]);
};*/

module.exports = recoverPassword;