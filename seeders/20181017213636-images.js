'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add images for the 3 seeded items
    return queryInterface.bulkInsert('images', [{
      item_id: 1, // Purple Shoes
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125823/samples/ecommerce/shoes.png'
    }, {
      item_id: 2, // Leather Bag
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125830/samples/ecommerce/leather-bag-gray.jpg'
    }, { 
      item_id: 3, // Text Books $5ea
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539811936/samples/ecommerce/books.jpg'
    }, {
      item_id: 4, // Intro to Java Textbook
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539811936/samples/ecommerce/books.jpg'
    }, {
      item_id: 5, // iPhone 6S
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816302/iphone6s.jpg'
    }, {
      item_id: 6, // Macbook Air
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816416/macbookair.jpg'
    }, {
      item_id: 7, // Gym Party
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816512/mashouf.jpg'
    }, {
      item_id: 8, // Career Fair
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816585/career.jpg'
    }, {
      item_id: 9, // Coffee Pot 1
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816673/coffeepot1.jpg'
    }, {
      item_id: 10, // Coffee Pot 2
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816732/coffeepot2.jpg'
    }, {
      item_id: 11, // Econ Tutor
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125821/samples/people/smiling-man.jpg'
    }, {
      item_id: 12, // Carpool
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125824/samples/bike.jpg'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
