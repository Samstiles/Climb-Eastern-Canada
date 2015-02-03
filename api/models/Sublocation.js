module.exports = {
  attributes: {

    name: {
      type: 'string',
      unique: true,
      required: true
    },

    slug: {
      type: 'string',
      index: true,
      unique: true,
      required: true
    },

    description: {
      type: 'text',
      required: true
    },

    location: {
      model: 'Location',
      required: true
    }

  },

  beforeValidate: function(values, cb) {
    if (!values.name) return cb();

    values.slug = SlugService.sluggifyString(values.name);
    return cb();
  }

};