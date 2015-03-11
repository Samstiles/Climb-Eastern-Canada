var bcrypt = require('bcrypt-nodejs');

module.exports = {
  attributes: {

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    email: {
      type: 'email',
      unique: true,
      required: true
    },

    password: {
      type: 'text',
      required: true
    },

    is_admin: {
      type: 'boolean',
      defaultsTo: false
    }

  },

  beforeCreate: function(values, next) {

    values.email = values.email.toLowerCase();

    // Generate a random salt
    bcrypt.genSalt(10, function(err, salt) {
      if ( err || !salt) return res.send(500, { error: err, salt: salt });

      // Hash the password with the salt
      bcrypt.hash(values.password, salt, null, function(err, hash) {
        if (err || !hash) return res.send(500, { error: err, hash: hash });

        // Override the plain text password being passed to our model with the newly hashed one
        values.password = hash;

        // On to the next middleware!
        return next();
      });
    });
  },

};

