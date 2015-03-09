module.exports = {

  /**
   * ====> [findAll] <====
   * Finds all sublocations in the database
   * @endpoint        = '/api/sublocation/findAll'
   * @http_method     = 'GET'
   * @params          = NO PARAMETERS REQUIRED
   * @returns         = A list of every sublocation in the database
   */
  findAll: function (req, res) {
    Sublocation
      .find()
      .populate('location')
      .exec(function (err, foundSublocations) {
        if (err || !foundSublocations) return res.send(400, {
          error: err
        });

        return res.send(foundSublocations);
      });
  },

  /**
   * ====> [findById] <====
   * Finds one sublocation in the database by id
   * @endpoint        = '/api/sublocation/findById/{id}'
   * @http_method     = 'GET'
   * @params          = A sublocation MongoId
   * @params_example  = { id: "54d0270ab4581c07c14af9fb" }
   * @returns         = The sublocation that matched the MongoId passed in
   */
  findById: function (req, res) {
    var params = req.params.all();

    Sublocation
      .findOne(params.id)
      .populate('location')
      .exec(function (err, foundSublocation) {
        if (err || !foundSublocation) return res.send(400, {
          error: err
        });

        return res.send(foundSublocation);
      });
  },

  /**
   * ====> [findBySlug] <====
   * @description     = Finds one sublocation in the database by slug
   * @endpoint        = '/api/sublocation/findBySlug/{slug}'
   * @http_method     = 'GET'
   * @params          = A sublocation slug string
   * @params_example  = { slug: "unb-woodlot-AwxRSwU3" }
   * @returns         = The sublocation that matched the slug passed in
   */
  findBySlug: function (req, res) {
    var params = req.params.all();

    Sublocation
      .find()
      .where({
        slug: params.slug
      })
      .populate('location')
      .exec(function (err, foundSublocation) {
        if (err || !foundSublocation || foundSublocation.length === 0) return res.send(400, {
          error: err
        });
        foundSublocation = foundSublocation[0];
        return res.send(foundSublocation);
      });
  },

  /**
   * ====> [findRandom] <====
   * @description     = Finds five random sublocations in the database
   * @endpoint        = '/api/sublocation/findRandom/{count}'
   * @http_method     = 'GET'
   * @params          = count (#)
   * @params_example  = { count: 5 }
   * @returns         = A # of random sublocation objects with associations populated
   */
  findRandom: function (req, res) {
    var params = req.params.all();

    Sublocation
      .find()
      .populate('location')
      .populate('climbs')
      .exec(function (err, foundSublocations) {
        if (err || !foundSublocations) return res.send(400, {
          error: err
        });
        if (foundSublocations.length === 0) return res.send(foundSublocations);

        var results = [];

        for (var selected, i = 0; i < params.count; i++) {
          if (foundSublocations.length === 0) break;
          selected = foundSublocations[Math.floor(Math.random() * foundSublocations.length)];
          foundSublocations = _.without(foundSublocations, selected);
          results.push(selected);
        }

        return res.send(results);
      });
  },

  /**
   * ====> [findMostViewed] <====
   * @description     = Finds the X most viewed sublocations in the database
   * @endpoint        = '/api/sublocation/findMostViewed/:count
   * @http_method     = 'GET'
   * @params          = A count integer of what # you want returned
   * @params_example  = { count: 5 }
   * @returns         = X sublocation objects with the most views with associations populated
   */
  findMostViewed: function (req, res) {
    var params = req.params.all();

    Sublocation
      .find()
      .populate('climbs')
      .populate('location')
      .exec(function (err, foundSublocations) {
        if (err || !foundSublocations) return res.send(400, {
          error: err
        });
        if (foundSublocations.length === 0) return res.send(foundSublocations);

        foundSublocations = _.sortBy(foundSublocations, 'views');
        foundSublocations = foundSublocations.slice(0, params.count);
        foundSublocations = foundSublocations.reverse();

        return res.send(foundSublocations);
      });
  },

  /**
   * ====> [create] <====
   * @description     = Creates a sublocation with the data passed from
   *                    the form on the client, and associates the
   *                    sublocation to the location passed as well.
   * @endpoint        = '/api/sublocation'
   * @http_method     = 'POST'
   * @params          = A JSON hash of the sublocation data
   * @params_example  = { name: "UNB Woodlot",
   *                      description: "Test",
   *                      location: "54d02297ede0f879b76e2457" }
   * @returns         = The sublocation that was created (and its parent
   *                    location object)
   */
  create: function (req, res) {
    var params = req.params.all();

    console.log('Params', params);

    Location
      .findOne(params.location)
      .exec(function (err, foundLocation) {
        console.log('Err', err);
        console.log('Location', foundLocation);
        if (err || !foundLocation) return res.send(400, {
          error: err
        });

        Sublocation
          .create(params)
          .exec(function (err, createdSublocation) {
            console.log('Err', err);
            console.log('Sublocation', createdSublocation);
            if (err || !createdSublocation) return res.send(400, {
              error: err
            });

            foundLocation.sublocations.add(createdSublocation);

            foundLocation.save(function (err, savedLocation) {
              if (err || !savedLocation) return res.send(400, {
                error: err
              });

              return res.send(savedLocation);
            });
          });
      });
  },

  /**
   * ====> [update] <====
   * @description     = Updates the sublocation that matches the MongoID
   *                    passed in with the new values
   * @endpoint        = '/api/sublocation'
   * @http_method     = 'PUT'
   * @params          = A sublocation MongoId string and any values to
   *                    be updated in a JSON hash
   * @params_example  = { id: "54d02297ede0f879b76e2457",
   *                      name: "This is a new name",
   *                      description: "This is a new description" }
   * @returns         = The sublocation that was updated (and its
   *                    parent location object)
   */
  update: function (req, res) {
    var params = req.params.all();

    Sublocation
      .update(params.id, params)
      .exec(function (err, updatedSublocation) {
        if (err || !updatedSublocation) return res.send(400, {
          error: err
        });

        updatedSublocation = updatedSublocation[0];

        Sublocation
          .findOne(updatedSublocation.id)
          .populate('location')
          .exec(function (err, foundSublocation) {
            if (err || !foundSublocation) return res.send(400, {
              error: err
            });

            return res.send(foundSublocation);
          });
      });
  },

  /**
   * ====> [destroy] <====
   * @description     = Destroys the sublocation that matches the MongoID
   *                    passed in
   * @endpoint        = '/api/sublocation/{id}'
   * @http_method     = 'DELETE'
   * @params          = A sublocation MongoId string
   * @params_example  = { id: "54d02297ede0f879b76e2457" }
   * @returns         = A success message if successful
   */
  destroy: function (req, res) {
    var params = req.params.all();

    Sublocation.destroy({
        id: params.id
      })
      .exec(function (err, destroyedSublocation) {
        if (err || !destroyedSublocation) return res.send(400, {
          error: err
        });

        return res.send(200, "Successfully destroyed sublocation of id " + params.id + "!");
      });
  }

};