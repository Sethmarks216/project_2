// require('dotenv').config({path:"../.env"});

const Sequelize = require('sequelize');

require('dotenv').config();

<<<<<<< HEAD
=======
// const cloudImage = cloudinary.config({ 
//   cloud_name: 'dns8bhr2c', 
//   api_key: '323438556125274', 
//   api_secret: 'ax-jVjBuvisYCYkAZbMYUyAFHIY' ,
//   secure: true,
// });
>>>>>>> a8b50d6553e5709d524bb63f94538d868978f6a0

// console.log(process.env.DB_NAME)
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
       port: 3306
    });

<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize
>>>>>>> a8b50d6553e5709d524bb63f94538d868978f6a0


