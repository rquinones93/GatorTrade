'use strict';

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('items', {
    sellerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    meetingPlace: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});

  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Image, {
      foreignKey: 'sellerId',
      targetKey: 'userId'
    });
  };

  return Item;
};