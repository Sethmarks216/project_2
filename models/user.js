const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    User_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    Dog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Dog",
          key: "id",
        },
    
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;
