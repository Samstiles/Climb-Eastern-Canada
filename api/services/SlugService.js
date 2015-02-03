var shortid = require('shortid');
var seed = 'gsodghq35gp9tsgoa8dix7fyd8q9999bj8ndkvawsbtn29ov358b467ew8mosvne3q2';
 
module.exports.sluggifyString = function(name) {
  shortid.seed(seed);
  shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$');
  var id = shortid.generate();
  return name.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-') + '-' + id;
};