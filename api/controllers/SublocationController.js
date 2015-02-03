module.exports = {
  findById: function(req, res) { return res.send(200); },
  findBySlug: function(req, res) { return res.send(200); },
  create: function(req, res) {
    var params = req.params.all();
    Sublocation.create(params).exec(function(err, createdSublocation) {
      if (err || !createdSublocation) return res.send(400, { error: err });
      return res.send(createdSublocation);
    });
  },
  update: function(req, res) { return res.send(200); }
};

