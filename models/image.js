const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Image_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    Dog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Dog',
          key: 'id'
        }

    },// define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Image',
  }
);

module.exports = Image;
