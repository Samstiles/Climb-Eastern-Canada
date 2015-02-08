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
      type: 'string',
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

  }

};

