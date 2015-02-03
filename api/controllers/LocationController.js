module.exports = {

  /**
   * [findAll description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
   * [findById description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
   * [findBySlug description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
   * [create description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
   * [update description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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

