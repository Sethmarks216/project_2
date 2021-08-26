const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Dog extends Model {}

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Dog_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Dog_breed: {
        type: DataTypes.STRING,
        allowNull: false
      }

    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Dog',
  }
);

module.exports = Dog;
