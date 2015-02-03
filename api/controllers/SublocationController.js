module.exports = {
  findById: function(req, res) { return res.send(200); },
  findBySlug: function(req, res) { return res.send(200); },
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

