const db = require('../connection');
const bcrypt = require('bcrypt');

// Updates with new password NOTE: Still needs hash
const CHANGE_PASSWORD = 'UPDATE users SET password = $2 WHERE user_id = $1';

const changePassword = (user_id, password) => {

    return bcrypt.hash(password, 10).then(hash => {
        // Returns hashed password
        // change password for user with user_id
        return db.query(CHANGE_PASSWORD, [user_id, hash]);
    }).catch(err => console.log(err));
};

module.exports = changePassword;