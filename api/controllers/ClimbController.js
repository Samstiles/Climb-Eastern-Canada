module.exports = {

  /**
   * [findAll description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
   * [findById description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
   * [findBySlug description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
   * [create description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
   * [update description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
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
  }

};

