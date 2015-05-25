module.exports = {

  /**
   * ====> [createBulkSublocations] <====
   * @description     = Creates sublocations (and associates them with
   *                    their parent location) in bulk.
   * @endpoint        = '/api/admin/createBulkSublocations'
   * @http_method     = 'POST'
   * @params          = A JSON array of the sublocation hash data
   * @params_example  = { name: "Sleigh Ride",
   *                      description: "Test",
   *                      location: "54d42094a2a52437546b7903" }
   * @returns         = 200 (Success) or 400 (Fail)
   */
  createBulkSublocations: function(req, res) {
    var params = req.params.all();
    var sublocationsToBeCreated = JSON.parse(params.sublocations);

    async.eachSeries(sublocationsToBeCreated, function(sublocation, callback) {

      console.log('Processing sublocation...', sublocation.name);

      Sublocation.create(sublocation).exec(function(err, createdSublocation) {

        console.log('Err:', err);
        console.log('Sublocation', createdSublocation);

        if (err || !createdSublocation) return callback('Error creating sublocation \'' + sublocation.name + '\'! Error: ', err);

        Location.findOne(createdSublocation.location).exec(function(err, foundLocation) {
          if (err || !foundLocation) return callback('Error finding parent location of id \'' + sublocation.location + '\'! Error: ', err);

          foundLocation.sublocations.add(createdSublocation);

          foundLocation.save(function(err, savedLocation) {
            if (err || !savedLocation) return callback('Error saving parent location \'' + foundLocation.name + '\'! Error: ', err);

            return callback();
          });
        });
      });

    }, function(err) {
      if (err) return res.send(400, err);
      return res.send(200);
    });

  }

};