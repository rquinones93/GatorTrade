'use strict';

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    itemId: DataTypes.INTEGER,
    imageLink: DataTypes.STRING
  }, {});

  Image.associate = function(models) {
    Image.belongsTo(models.Item, {
      foreignKey: 'itemId',
      targetKey: 'itemId'
    });
  };
  
  return Image;
};