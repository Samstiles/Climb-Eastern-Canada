module.exports = {
  findById: function(req, res) { return res.send(200); },
  findBySlug: function(req, res) { return res.send(200); },
  create: function(req, res) {
    var params = req.params.all();
    Climb.create(params).exec(function(err, createdClimb) {
      if (err || !createdClimb) return res.send(400, { error: err });
      return res.send(createdClimb);
    });
  },
  update: function(req, res) { return res.send(200); }
};

