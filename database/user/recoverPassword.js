const db = require('../connection');

// Checks to see if the Email is already registered
const READ_MESSAGE = 'UPDATE users SET password = $1 WHERE email = $2, first_name = $3, last_name = $4';
const READ_MESSAGE2 = 'UPDATE users SET password = $1 WHERE email = $2, first_name = $3, last_name = $4, secret = $5';

const recoverPassword = (inputEmail, inputfirstname, inputlastname, secret, newpassword) => {
    return db.query(UPDATE_PASSWORD, [newpassword, inputEmail, inputfirstname, inputlastname])
    .mysql_affected_rows()
};
/*const recoverPassword = (inputEmail, inputfirstname, inputlastname, secret, newpassword) => {
    return db.query(UPDATE_PASSWORD2, [newpassword, inputEmail, inputfirstname, inputlastname, secret]);
};*/

module.exports = recoverPassword;