CragProject.service('SocketService',
  ['StorageService',
  function(StorageService) {

    this.get = function(url, cb) {
      var options = {
        headers: {
          'x-access-token': StorageService.retrieve('x-access-token')
        },
        method: 'get',
        url: url
      };

      io.socket._request(options, function(resBody, fullRes) {
        return cb(resBody, fullRes);
      });
    };

    this.put = function(url, data, cb) {
      var options = {
        headers: {
          'x-access-token': StorageService.retrieve('x-access-token')
        },
        data: data || {},
        method: 'put',
        url: url
      };

      io.socket._request(options, function(resBody, fullRes) {
        return cb(resBody, fullRes);
      });
    };

    this.post = function(url, data, cb) {
      var options = {
        headers: {
          'x-access-token': StorageService.retrieve('x-access-token')
        },
        data: data || {},
        method: 'post',
        url: url
      };

      io.socket._request(options, function(resBody, fullRes) {
        return cb(resBody, fullRes);
      });
    };

    this['delete'] = function(url, data, cb) {
      var options = {
        headers: {
          'x-access-token': StorageService.retrieve('x-access-token')
        },
        data: data || {},
        method: 'delete',
        url: url
      };

      io.socket._request(options, function(resBody, fullRes) {
        return cb(resBody, fullRes);
      });
    };

  }]
);