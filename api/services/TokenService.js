var jwt = require('jwt-simple');
var secret = 'cragproject2015';

module.exports.encodeToken = function(token) {
  return jwt.encode(token, secret);
};

module.exports.decodeToken = function(token) {
  return jwt.decode(token, secret);
};