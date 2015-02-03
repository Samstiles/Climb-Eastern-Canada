module.exports = {
  findById: function(req, res) { return res.send(200); },
  findBySlug: function(req, res) { return res.send(200); },
  create: function(req, res) {
    console.log(Location.getRequiredFields());
    var params = req.params.all();
    Location.create(params).exec(function(err, createdLocation) {
      if (err || !createdLocation) return res.send(400, { error: err });
      return res.send(createdLocation);
    });
  },
  update: function(req, res) { return res.send(200); }
};

