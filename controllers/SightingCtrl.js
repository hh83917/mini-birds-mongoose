var Sighting = require('../models/Sighting.js');

module.exports = {
  read: function(req, res) {
    Sighting
    .find(req.query)
    .exec()
    .then(function(sightings) {
      res.status(200).send(sightings);
    });
  },
  create: function(req, res) {
    var sighting = new Sighting(req.body);
    sighting.save().then(function(err, result) {
      res.status(201).send(result);
    });
  },
  update: function(req, res) {

  },
  delete: function(req, res) {

  }
};
