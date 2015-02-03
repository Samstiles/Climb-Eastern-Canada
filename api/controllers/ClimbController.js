module.exports = {
  findById: function(req, res) {
    var params = req.params.all();
    console.log('Params', params);

    Climb.findOne(params.id)
    .populate('location')
    .exec(function(err, foundClimb) {
      if (err || !foundClimb) return res.send(400, { error: err });

      return res.send(foundClimb);
    });
  },
  findBySlug: function(req, res) {
    var params = req.params.all();

    Climb.find()
    .where({ slug: params.slug })
    .populate('location')
    .exec(function(err, foundClimb) {
      if (err || !foundClimb) return res.send(400, { error: err });
      foundClimb = foundClimb[0];
      return res.send(foundClimb);
    });
  },
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

