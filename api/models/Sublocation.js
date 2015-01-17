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

    // crag: {
    //   model: 'Crag',
    //   required: true
    // },

    // routes: {
    //   collection: 'Route',
    //   via: 'wall'
    // }

  },

  beforeValidate: function(values, cb) {
    "use strict";

    if ( !values.name )
      return cb();

    values.slug = UtilService.sluggifyString(values.name);
    return cb();
  }

};