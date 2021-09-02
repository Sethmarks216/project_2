const router = require('express').Router();
const db = require('../../models');

// Routes
// =============================================================

router.get('/', (req, res) => {
  db.User.findAll({
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just `db.Post`
    include: [db.Dog]
  }).then(dbUser => {
    res.json(dbUser);
  });
});

router.get('/:id', (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id
    },
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just `db.Post`
    include: [db.Dog]
  }).then(dbUser => {
    res.json(dbUser);
  });
});

// Login route
// Logout route

router.post('/', (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password
  })
     .then(dbUserData => {
    req.session.save(() => {
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;

    res.json(dbUserData);
    });
});
});

router.post('/login', (req, res) => {

  db.User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }
  
        // Verify user
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
          return;
          } 

        req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      //Idle timeout is set to three minutes 
      // req.session.cookie.maxAge = 180000;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });

});

router.put('/:id', (req, res) => {
    db.User.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(dbUser => {
      res.json(dbUser);
    });

  // update a User by its `id` value
});
// route for adding a new dog to the user
// router.put('/:id', (req, res) => {
//     db.Dog.create(req.body).then(dbDog => {
//         db.User.update({dogId: dbDog.id}, {
//             where: {
//               id: req.session.userID
//             }
//           }).then(dbUser => {
//             res.json(dbUser);
//           });
        
//       });
//   // update a User by its `id` value
// });

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
  

});

router.delete('/:id', (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbUser => {
    res.json(dbUser);
  });
});

module.exports = router;
