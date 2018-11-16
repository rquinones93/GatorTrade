const db = require('../connection');

const CREATE_ITEM =
  `INSERT INTO items ( seller_id, title, description, price, category, meeting_place, image_link, public_id, status ) ` +
  `VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9 ) RETURNING *`;

const create = (seller_id, title, description, price, category, meeting_place, image_link, public_id) => {
  return db.one(CREATE_ITEM, [ seller_id, title, description, price,
                               category, meeting_place, image_link, 
                               public_id, "Pending"]);
}; // All new items are in a Pending State

module.exports = create;