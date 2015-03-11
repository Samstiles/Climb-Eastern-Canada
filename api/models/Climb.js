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

    location: {
      model: 'Location',
      required: true
    },

    sublocation: {
      model: 'Sublocation'
    },

    pictures: {
      type: 'array'
    },

    grade: {
      type: 'string',
      in: ['5.0', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9',
           '5.10a', '5.10b', '5.10c', '5.10d', '5.11a', '5.11b', '5.11c', '5.11d',
           '5.12a', '5.12b', '5.12c', '5.12d', '5.13a', '5.13b', '5.13c', '5.13d',
           '5.14a', '5.14b', '5.14c', '5.14d', '5.15a', '5.15b', '5.15c', '5.15d',
           'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12',
           'V13', 'V14', 'V15', 'V16', 'A0', 'A1', 'A2', 'A3'],
      required: true
    },

    number_of_bolts: {
      type: 'integer'
    },

    is_multipitch: {
      type: 'boolean',
      defaultsTo: false
    },

    is_project: {
      type: 'boolean',
      defaultsTo: false
    },

    style: {
      type: 'string',
      in: ['Traditional', 'Sport', 'Boulder', 'Aid', 'Mixed'],
      required: true
    },

    protection_rating: {
      type: 'string',
      in: ['G', 'PG', 'R', 'X']
    },

    description: {
      type: 'text',
      required: true
    },

    height_in_meters: {
      type: 'integer'
    },

    first_ascent_by: {
      type: 'string'
    },

    first_ascent_year: {
      type: 'integer'
    },

    anchor: {
      type: 'string'
    }

  },

  beforeValidate: function(values, cb) {
    if (values.slug) return cb();
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