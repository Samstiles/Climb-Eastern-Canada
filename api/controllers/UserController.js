var bcrypt = require('bcrypt-nodejs');

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
      var token = TokenService.encodeToken({ id: createdUser.id, email: createdUser.email, admin: createdUser.is_admin });
      return res.send(token);
    });
  },

  loginEmail: function(req, res) {
    var params = req.params.all();

    User
    .find()
    .where({ email: params.email })
    .exec(function(err, foundUser) {
      if (err || !foundUser) return res.send(400, { error: err });

      foundUser = foundUser[0];

      bcrypt.compare(params.password, foundUser.password, function(err, result) {
        if (err || !result) return res.send(400, { error: 'Invalid password.' });
        var token = TokenService.encodeToken({ id: foundUser.id, email: foundUser.email, admin: foundUser.is_admin });
        return res.send(token);
      });
    });
  }

};