module.exports = {
  findById: function(req, res) {
    var params = req.params.all();

    Sublocation.findOne(params.id)
    .populate('location')
    .exec(function(err, foundSublocation) {
      if (err || !foundSublocation) return res.send(400, { error: err });

      return res.send(foundSublocation);
    });
  },
  findBySlug: function(req, res) {
    var params = req.params.all();

    Sublocation.find()
    .where({ slug: params.slug })
    .populate('location')
    .exec(function(err, foundSublocation) {
      if (err || !foundSublocation) return res.send(400, { error: err });
      foundSublocation = foundSublocation[0];
      return res.send(foundSublocation);
    });
  },
  create: function(req, res) {
    var params = req.params.all();

    Location.findOne(params.location).exec(function(err, foundLocation) {
      if (err || !foundLocation) return res.send(400, { error: err });

      Sublocation.create(params).exec(function(err, createdSublocation) {
        if (err || !createdSublocation) return res.send(400, { error: err });

        foundLocation.sublocations.add(createdSublocation);

        foundLocation.save(function(err, savedLocation) {
          if (err || !savedLocation) return res.send(400, { error: err });

          return res.send(savedLocation);
        });
      });
    });
  },
  update: function(req, res) { return res.send(200); }
};

