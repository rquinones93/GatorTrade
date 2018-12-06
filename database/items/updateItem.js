const db = require('../connection');

const UPDATE_ITEM =
  `UPDATE items ` +
  `SET title = $2, description = $3, price = $4, category = $5, meeting_place = $6, image_link = $7, public_id = $8, status = $9 ` +
  `WHERE item_id = $1`;

const updateItem = (item_id, title, description, price, category, meeting_place, image_link, public_id) => {
  return db.none(UPDATE_ITEM, [item_id, title, description, price,
                              category, meeting_place, image_link,
                              public_id, "Pending"
  ]);
}; // All new items are in a Pending State

module.exports = updateItem;