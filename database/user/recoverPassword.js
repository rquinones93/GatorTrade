const db = require('../connection');

// Checks to see if the Email is already registered
const UPDATE_PASSWORD = 'UPDATE users SET password = $1 WHERE email = $2 AND first_name = $3 AND last_name = $4';
//secret included update
//const UPDATE_PASSWORD2 = 'UPDATE users SET password = $1 WHERE email = $2 AND first_name = $3 AND last_name = $4 AND secret = $5';

const CHECK_USEREXISTS = 'SELECT * FROM users WHERE email = $1 AND first_name = $2 AND last_name = $3';
//secret included check
//const CHECK_USEREXISTS2 = 'SELECT * FROM users WHERE email = $1 AND first_name = $2 AND last_name = $3 AND secret = $4';


const recoverPassword = (newpassword, inputEmail, inputfirstname, inputlastname) => {
    db.query(UPDATE_PASSWORD, [newpassword, inputEmail, inputfirstname, inputlastname]);
    console.log("First Query Works");
    return db.query(CHECK_USEREXISTS, [inputEmail, inputfirstname, inputlastname]);
};

//if secret is implemented
/*const recoverPassword = (inputEmail, inputfirstname, inputlastname, newpassword, secret) => {
    db.query(UPDATE_PASSWORD2, [newpassword, inputEmail, inputfirstname, inputlastname, secret]);
    return db.query(CHECK_USEREXISTS, [newpassword, inputEmail, inputfirstname, inputlastname, secret]);
};*/

module.exports = recoverPassword;