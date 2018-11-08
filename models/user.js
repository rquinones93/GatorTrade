'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePicture: DataTypes.STRING
  }, {});

  // Key Associations
  User.associate = function(models) {
    User.hasMany(models.Items, {
      foreignKey: 'seller_id',
      sourceKey: 'user_id'
    });

    User.hasMany(models.Messages, {
      foreignKey: 'seller_id',
      sourceKey: 'user_id'
    });

    User.hasMany(models.Admin, {
      foreignKey: 'user_id',
      sourceKey: 'user_id'
    });
  };
  
  return User;
};