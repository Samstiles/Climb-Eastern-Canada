module.exports = {
  findById: function(req, res) {
    var params = req.params.all();

    Location.findOne(params.id)
    .populate('sublocations')
    .populate('climbs')
    .exec(function(err, foundLocation) {
      if (err || !foundLocation) return res.send(400, { error: err });

      return res.send(foundLocation);
    });
  },
  findBySlug: function(req, res) {
    var params = req.params.all();

    Location.find()
    .where({ slug: params.slug })
    .populate('sublocations')
    .populate('climbs')
    .exec(function(err, foundLocation) {
      if (err || !foundLocation) return res.send(400, { error: err });
      foundLocation = foundLocation[0];
      return res.send(foundLocation);
    });
  },
  create: function(req, res) {
    var params = req.params.all();

    Location.create(params)
    .exec(function(err, createdLocation) {
      if (err || !createdLocation) return res.send(400, { error: err });

      return res.send(createdLocation);
    });
  },
  update: function(req, res) { return res.send(200); }
};

