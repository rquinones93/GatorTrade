'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add 3 Items
    return queryInterface.bulkInsert('items', [{
      seller_id: '2',
      title: 'Purple Running Shoes - Like New',
      description: 'Worn once, perfect for the gym.',
      price: 30.00,
      category: 'Apparel',
      meeting_place: 'Cesar Chavez Student Center',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539125823/samples/ecommerce/shoes.png',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '1',
      title: 'Leather Bag',
      description: 'Got a new one need to sell, brown leather bag.',
      price: 45.00,
      category: 'Apparel',
      meeting_place: 'J. Paul Leonard Library - Peets Coffee',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539125830/samples/ecommerce/leather-bag-gray.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '2',
      title: 'Text Books',
      description: 'Hella books, on the low.',
      price: 5.00,
      category: 'Books',
      meeting_place: 'J. Paul Leonard Library - Research Commons',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539811936/samples/ecommerce/books.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '2',
      title: 'Intro to Java Textbook - CSC210',
      description: "I graduate next semester, and need to get rid of it",
      price: 15.00,
      category: 'Books',
      meeting_place: 'Student Services Building',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539811936/samples/ecommerce/books.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '1',
      title: 'iPhone 6s',
      description: "Pretty used, got a new phone. Small crack on the screen.",
      price: 70.00,
      category: 'Electronics',
      meeting_place: 'Cesar Chavez Student Center',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816302/iphone6s.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '2',
      title: 'Macbook Air',
      description: "Perfect for taking notes in class",
      price: 200.00,
      category: 'Electronics',
      meeting_place: 'Student Services Building',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816416/macbookair.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '1',
      title: 'Gym Opening Party',
      description: "Come by! 1pm-8pm!",
      price: 5.00,
      category: 'Events',
      meeting_place: 'Mashouf Wellness Center',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816512/mashouf.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '2',
      title: 'Career Fair (Free)',
      description: "Internships and Full Time! Stop by from 11AM-3PM",
      price: 0.00,
      category: 'Events',
      meeting_place: 'Cesar Chavez Student Center',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816585/career.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '2',
      title: 'Coffee Pot',
      description: "The best coffee you'll ever have",
      price: 7.50,
      category: 'Home Goods',
      meeting_place: 'Cesar Chavez Student Center',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539816673/coffeepot1.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '1',
      title: 'Coffee Pot 2.0',
      description: "Makes better coffee than that other person's one",
      price: 7.49,
      category: 'Home Goods',
      meeting_place: 'Cesar Chavez Student Center',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539816732/coffeepot2.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '1',
      title: 'Economics Tutor - 15/hr',
      description: "Dudes. I'm like. The smartest tutor. I swear.",
      price: 15.00,
      category: 'Services',
      meeting_place: 'J. Paul Leonard Library - Research Commons',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539125821/samples/people/smiling-man.jpg',
      public_id: "",
      status: 'Pending'
    }, {
      seller_id: '2',
      title: 'Carpool - San Mateo to SFSU',
      description: "Looking for people to join my carpool! $10 a week!",
      price: 10.00,
      category: 'Services',
      meeting_place: 'J. Paul Leonard Library - Peets Coffee',
      image_link: 'https://res.cloudinary.com/hx8ztvtac/image/upload/v1539125824/samples/bike.jpg',
      public_id: "",
      status: 'Pending'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};
