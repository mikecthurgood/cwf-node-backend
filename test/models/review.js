'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Review.init({
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    authorName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};