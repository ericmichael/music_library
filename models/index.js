// this file makes the database connection, collects all the models
// and sets the associations
// other files can use this for database access by requiring it and
// assigning the exports

// assuming that this file (index.js) is in a subdirectory called models:
//  const models = require('./models');

'use strict';

// database connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'music_library.sqlite'
});

// import models
const Album = sequelize.import("./albums.js");
const Track = sequelize.import("./tracks.js");

// Add association here



module.exports = {
  Album, Track
};
