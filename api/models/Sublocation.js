module.exports = {
  attributes: {

    name: {
      type: 'string',
      unique: true,
      required: true
    },

    views: {
      type: 'integer',
      defaultsTo: 1
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
    },

    climbs: {
      collection: 'Climb'
    }

  },

  beforeValidate: function(values, cb) {
    if (!values.name) return cb();
    // if (values.views) delete values.views;

    values.slug = SlugService.sluggifyString(values.name);
    return cb();
  },

  getRequiredAttributes: function() {
    var self = this;
    return _.keys(_.pick(self._attributes, function(value, key, object) {
      return "required" in object[key];
    }));
  }

};