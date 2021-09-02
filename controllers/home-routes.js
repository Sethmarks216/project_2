const router = require('express').Router();
const sequelize = require('../config/connection');
const { Dog, Image , User,  } = require('../models');

// Render the home page
router.get('/', (req, res) => {
  Image.findAll({
      // Query configuration
      // From the Post table, include the post ID, URL, title, and the timestamp from post creation
      attributes: [
          'id',
          'image_name',
          'image_content',
          'created_at',
        ],
      // Order the posts from most recent to least
      order: [[ 'created_at', 'DESC']],
      // Lets see what we can do about upvotes and popularity instead of descending order.
      // Include other information
      include: [
          {
              model: User,
              attributes: ['username']
          },
          {
              model: Dog,
              attributes: ['id', 'dog_name', 'dog_breed', 'user_id'],
              include: {
                  model: User,
                  attributes: ['id', 'username']
              }
          },
          // {
          //   // model: Comment,
          //   // attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          //   // include: {
          //   //   model: User,
          //   //   attributes: ['id', 'username']
          //   // },
          // }
      ]
  })
  // render the posts
  .then(dbImageData => {
    // create an array for the images, using the get method to trim extra sequelize object data out
    const images = dbImageData.map(Image => Image.get({ plain: true }));
    // pass the images into the homepage template
    res.render('homepage', {
      images,
      loggedIn: req.session.loggedIn
    });
  })
  // if there was a server error, return the error
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
  // res.render('homepage')
});

// Render the single image post page
router.get('/Image/:id', (req, res) => {
  Image.findOne({
    where: {
      // specify the image id parameter in the query
      id: req.params.id
    },
    // Query configuration, as with the get all posts route
    attributes: [
      'id',
      'image_name',
      'image_content',
      'data',
      'dog_id',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['id', 'username']
      },
      {
        model: Dog,
        attributes: ['id', 'dog_name', 'dog_breed', 'user_id'],
        include: {
            model: User,
            attributes: ['id', 'username']
        }
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['id', 'username']
        }
      },
    ]
  })
    .then(dbImageData => {
      // if no post by that id exists, return an error
      if (!dbImageData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize the post data, removing extra sequelize meta data
      const image = dbImageData.get({ plain: true });
      // pass the posts and a session variable into the single post template
      res.render('single-image', {
          image,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      // if a server error occured, return an error
      console.log(err);
      res.status(500).json(err);
    });
});

// Render the login page.  If the user is logged in, redirect to the home page.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Render the sign up page.  If the user is logged in, redirect to the home page.
router.get('/signup', (req, res) => {
if (req.session.loggedIn) {
  res.redirect('/');
  return;
}

res.render('signup');
});

module.exports = router;