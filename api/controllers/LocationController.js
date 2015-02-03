module.exports = {

  /**
   * ====> [findAll] <====
   * Finds all locations in the database
   * @endpoint        = '/api/location/findAll'
   * @endpoint_method = 'GET'
   * @params          = NO PARAMETERS REQUIRED
   * @returns         = A list of every location in the database
   */
  findAll: function(req, res) {
    Location
    .find()
    .populate('sublocations')
    .populate('climbs')
    .exec(function(err, foundLocations) {
      if (err || !foundLocations) return res.send(400, { error: err });

      return res.send(foundLocations);
    });
  },

  /**
   * ====> [findById] <====
   * Finds one location in the database by id
   * @endpoint        = '/api/location/findById/{id}'
   * @endpoint_method = 'GET'
   * @params          = A location MongoId
   * @params_example  = { id: "54d0270ab4581c07c14af9fb" }
   * @returns         = The location that matched the MongoId passed in
   */
  findById: function(req, res) {
    var params = req.params.all();

    Location
    .findOne(params.id)
    .populate('sublocations')
    .populate('climbs')
    .exec(function(err, foundLocation) {
      if (err || !foundLocation) return res.send(400, { error: err });

      return res.send(foundLocation);
    });
  },

  /**
   * ====> [findBySlug] <====
   * @description     = Finds one location in the database by slug
   * @endpoint        = '/api/location/findBySlug/{slug}'
   * @endpoint_method = 'GET'
   * @params          = A location slug string
   * @params_example  = { slug: "unb-woodlot-AwxRSwU3" }
   * @returns         = The location that matched the slug passed in
   */
  findBySlug: function(req, res) {
    var params = req.params.all();

    Location.find()
    .where({ slug: params.slug })
    .populate('sublocations')
    .populate('climbs')
    .exec(function(err, foundLocation) {
      if (err || !foundLocation) return res.send(400, { error: err });
      foundLocation = foundLocation[0];
      return res.send(foundLocation);
    });
  },

  /**
   * ====> [create] <====
   * @description     = Creates a location with the data passed from
   *                    the form on the client.
   * @endpoint        = '/api/location'
   * @endpoint_method = 'POST'
   * @params          = A JSON hash of the location data
   * @params_example  = { name: "UNB Woodlot",
   *                      description: "Test" }
   * @returns         = The location that was created
   */
  create: function(req, res) {
    var params = req.params.all();

    Location
    .create(params)
    .exec(function(err, createdLocation) {
      if (err || !createdLocation) return res.send(400, { error: err });

      return res.send(createdLocation);
    });
  },

  /**
   * ====> [update] <====
   * @description     = Updates the location that matches the MongoID
   *                    passed in with the new values
   * @endpoint        = '/api/location'
   * @endpoint_method = 'PUT'
   * @params          = A location MongoId string and any values to
   *                    be updated in a JSON hash
   * @params_example  = { id: "54d02297ede0f879b76e2457",
   *                      name: "This is a new name",
   *                      description: "This is a new description" }
   * @returns         = The location that was updated
   */
  update: function(req, res) {
    var params = req.params.all();

    Location
    .update(params.id, params)
    .exec(function(err, updatedLocation) {
      if (err || !updatedLocation) return res.send(400, { error: err });

      updatedLocation = updatedLocation[0];

      Location
      .findOne(updatedLocation.id)
      .populate('sublocations')
      .populate('climbs')
      .exec(function(err, foundLocation) {
        if (err || !foundLocation) return res.send(400, { error: err });

        return res.send(foundLocation);
      });
    });
  }

};

