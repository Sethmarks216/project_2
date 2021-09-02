// import models
const User = require('./user');
// User Model has a username, Id, and password.

const Dog = require('./dog');
// Dog model has a dogname, Id, breed, and references a user Id.

const Image = require('./image');
// Image model has an imagename, Id, data, text content, and references a dog.

const Comment = require('./comment')

//create associations
User.hasMany(Dog, {
  foreignKey: 'user_id'
});

Dog.belongsTo(User, {
  foreignKey: 'user_id',
});

Image.belongsTo(Dog, {
  foreignKey: 'dog_id'
});

Image.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Image, {
  foreignKey: 'user_id'
});

Dog.hasMany(Image, {
  foreignKey: 'dog_id'
});

Image.hasMany(Comment, {
  foreignKey: 'image_id'
});

Comment.belongsTo(Image, {
  foreignKey: 'image_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = {
  Dog,
  User,
  Image,
  Comment
};
