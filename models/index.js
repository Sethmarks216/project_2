// import models
const User = require('./user');
const Dog = require('./dog');

// dogs belongsTo user
dog.belongsTo(user);
// Categories have many dogs
user.hasMany(dog);

// // dogs belongToMany Tags (through dogTag)
// dog.belongsToMany(Tag, { through: dogTag});

// // Tags belongToMany dogs (through dogTag)
// Tag.belongsToMany(dog, {through: dogTag});

module.exports = {
  dog,
  user,
};
