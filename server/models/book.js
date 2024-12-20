'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {}
  }
  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Title is required',
          },
          notEmpty: {
            msg: 'Title is required',
          },
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Author is required',
          },
          notEmpty: {
            msg: 'Author is required',
          },
        },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Year is required',
          },
          notEmpty: {
            msg: 'Year is required',
          },
          min: {
            args: 1,
            msg: 'Year must be greater than 0',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
