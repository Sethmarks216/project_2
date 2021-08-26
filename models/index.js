// import models
const User = require('./user');
const Dog = require('./dog');
const Image = require('./image');

// dogs belongsTo user
Dog.belongsTo(User);
Image.belongsTo(Dog)
// Categories have many dogs
User.hasMany(Dog);
User.hasMany(Image);

// // dogs belongToMany Tags (through dogTag)
// dog.belongsToMany(Tag, { through: dogTag});

// // Tags belongToMany dogs (through dogTag)
// Tag.belongsToMany(dog, {through: dogTag});

module.exports = {
  Dog,
  User,
  Image,
};
