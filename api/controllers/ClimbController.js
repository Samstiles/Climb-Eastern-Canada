module.exports = {

  /**
   * ====> [findAll] <====
   * Finds all climbs in the database
   * @endpoint        = '/api/climb/findAll'
   * @http_method     = 'GET'
   * @params          = NO PARAMETERS REQUIRED
   * @returns         = A list of every climb in the database
   */
  findAll: function(req, res) {
    Climb
    .find()
    .populate('location')
    .exec(function(err, foundClimbs) {
      if (err || !foundClimbs) return res.send(400, { error: err });

      return res.send(foundClimbs);
    });
  },

  /**
   * ====> [findById] <====
   * Finds one climb in the database by id
   * @endpoint        = '/api/climb/findById/{id}'
   * @http_method     = 'GET'
   * @params          = A climb MongoId
   * @params_example  = { id: "54d0270ab4581c07c14af9fb" }
   * @returns         = The climb that matched the MongoId passed in
   */
  findById: function(req, res) {
    var params = req.params.all();

    Climb
    .findOne(params.id)
    .populate('location')
    .exec(function(err, foundClimb) {
      if (err || !foundClimb) return res.send(400, { error: err });

      return res.send(foundClimb);
    });
  },

  /**
   * ====> [findBySlug] <====
   * @description     = Finds one climb in the database by slug
   * @endpoint        = '/api/climb/findBySlug/{slug}'
   * @http_method     = 'GET'
   * @params          = A climb slug string
   * @params_example  = { slug: "sleigh-ride-AwxRSwU3" }
   * @returns         = The climb that matched the slug passed in
   */
  findBySlug: function(req, res) {
    var params = req.params.all();

    Climb
    .find()
    .where({ slug: params.slug })
    .populate('location')
    .exec(function(err, foundClimb) {
      if (err || !foundClimb) return res.send(400, { error: err });

      foundClimb = foundClimb[0];

      return res.send(foundClimb);
    });
  },

  /**
   * ====> [create] <====
   * @description     = Creates a climb with the data passed from
   *                    the form on the client.
   * @endpoint        = '/api/climb'
   * @http_method     = 'POST'
   * @params          = A JSON hash of the climb data
   * @params_example  = { name: "Sleigh Ride",
   *                      description: "Test",
   *                      grade: "V7" }
   * @returns         = The climb that was created
   */
  create: function(req, res) {
    var params = req.params.all();

    Location
    .findOne(params.location)
    .exec(function(err, foundLocation) {
      if (err || !foundLocation) return res.send(400, { error: err });

      Climb
      .create(params)
      .exec(function(err, createdClimb) {
        if (err || !createdClimb) return res.send(400, { error: err });

        foundLocation.climbs.add(createdClimb);

        foundLocation.save(function(err, savedLocation) {
          if (err || !savedLocation) return res.send(400, { error: err });
          
          return res.send(savedLocation);
        });
      });
    });
  },

  /**
   * ====> [update] <====
   * @description     = Updates the climb that matches the MongoID
   *                    passed in with the new values
   * @endpoint        = '/api/climb'
   * @http_method     = 'PUT'
   * @params          = A climb MongoId string and any values to
   *                    be updated in a JSON hash
   * @params_example  = { id: "54d02297ede0f879b76e2457",
   *                      name: "This is a new name",
   *                      description: "This is a new description" }
   * @returns         = The climb that was updated
   */
  update: function(req, res) {
    var params = req.params.all();

    Climb
    .update(params.id, params)
    .exec(function(err, updatedClimb) {
      if (err || !updatedClimb) return res.send(400, { error: err });

      updatedClimb = updatedClimb[0];

      Climb
      .findOne(updatedClimb.id)
      .populate('location')
      .exec(function(err, foundClimb) {
        if (err || !foundClimb) return res.send(400, { error: err });

        return res.send(foundClimb);
      });
    });
  },

  /**
   * ====> [destroy] <====
   * @description     = Destroys the climb that matches the MongoID
   *                    passed in
   * @endpoint        = '/api/climb/{id}'
   * @http_method     = 'DELETE'
   * @params          = A climb MongoId string
   * @params_example  = { id: "54d02297ede0f879b76e2457" }
   * @returns         = A success message if successful
   */
  destroy: function(req, res) {
    var params = req.params.all();

    Climb.destroy({ id: params.id }).exec(function(err, destroyedClimb) {
      if (err || !destroyedClimb) return res.send(400, { error: err });

      return res.send(200, "Successfully destroyed climb of id " + params.id + "!");
    });
  }

};

