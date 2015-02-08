module.exports = {
  findAll: function(req, res) { return res.send(200); },
  findById: function(req, res) { return res.send(200); },
  findBySlug: function(req, res) { return res.send(200); },
  create: function(req, res) { return res.send(200); },
  update: function(req, res) { return res.send(200); },
  destroy: function(req, res) { return res.send(200); },
  registerEmail: function(req, res) {
    var params = req.params.all();

    User
    .create(params)
    .exec(function(err, createdUser) {
      if (err || !createdUser) return res.send(400, { error: err });
      var token = TokenService.encodeToken({ id: createdUser.id });
      return res.send(token);
    });
  }
};