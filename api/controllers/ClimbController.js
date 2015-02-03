module.exports = {
  findById: function(req, res) { return res.send(200); },
  findBySlug: function(req, res) { return res.send(200); },
  create: function(req, res) {
    var params = req.params.all();

    Location.findOne(params.location).exec(function(err, foundLocation) {
      if (err || !foundLocation) return res.send(400, { error: err });

      Climb.create(params).exec(function(err, createdClimb) {
        if (err || !createdClimb) return res.send(400, { error: err });

        foundLocation.climbs.add(createdClimb);

        foundLocation.save(function(err, savedLocation) {
          if (err || !savedLocation) return res.send(400, { error: err });
          
          return res.send(savedLocation);
        });
      });
    });
  },
  update: function(req, res) { return res.send(200); }
};

