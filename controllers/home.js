//Added by Logan

const path = require("path");

//Remember this may need to be changed in tandem with Handlebars stuff
const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};

module.exports = {
  getHome: home
};