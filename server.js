const express = require("express");
const app = express();
const db = require("./models");
const sequelize = require('./config/connection');
const initRoutes = require("./controllers/web");
const path = require('path');
const routes = require('./controllers/');

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);


const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.engine('handlebars', engine);
// app.set('view engine', 'handlebars');
// app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});