module.exports.routes = {

  /**
   * GET (read) ALL routes
   */
  'GET /api/climb/findAll': {
    controller: 'ClimbController',
    action: 'findAll'
  },

  'GET /api/location/findAll': {
    controller: 'LocationController',
    action: 'findAll'
  },

  'GET /api/sublocation/findAll': {
    controller: 'SublocationController',
    action: 'findAll'
  },

  'GET /api/user/findAll': {
    controller: 'UserController',
    action: 'findAll'
  },

  /**
   * GET (read) routes by Slug
   */
  'GET /api/climb/findBySlug/:slug': {
    controller: 'ClimbController',
    action: 'findBySlug'
  },

  'GET /api/location/findBySlug/:slug': {
    controller: 'LocationController',
    action: 'findBySlug'
  },

  'GET /api/sublocation/findBySlug/:slug': {
    controller: 'SublocationController',
    action: 'findBySlug'
  },

  'GET /api/user/findBySlug/:slug': {
    controller: 'UserController',
    action: 'findBySlug'
  },

  /**
   * GET (read) routes by Id
   */
  'GET /api/climb/findById/:id': {
    controller: 'ClimbController',
    action: 'findById'
  },

  'GET /api/location/findById/:id': {
    controller: 'LocationController',
    action: 'findById'
  },

  'GET /api/sublocation/findById/:id': {
    controller: 'SublocationController',
    action: 'findById'
  },

  'GET /api/user/findById/:id': {
    controller: 'UserController',
    action: 'findById'
  },

  /**
   * GET (read) UTILITY routes 
   */
  'GET /api/climb/findRandom/:count': {
    controller: 'ClimbController',
    action: 'findRandom'
   },

  'GET /api/sublocation/findRandom/:count': {
    controller: 'SublocationController',
    action: 'findRandom'
   },

  'GET /api/location/findRandom/:count': {
    controller: 'LocationController',
    action: 'findRandom'
   },

  'GET /api/climb/findMostViewed/:count': {
    controller: 'ClimbController',
    action: 'findMostViewed'
  },

  'GET /api/sublocation/findMostViewed/:count': {
    controller: 'SublocationController',
    action: 'findMostViewed'
  },

  'GET /api/location/findMostViewed/:count': {
    controller: 'LocationController',
    action: 'findMostViewed'
  },

  /**
   * POST (create) routes
   */
  'POST /api/climb': {
    controller: 'ClimbController',
    action: 'create'
  },

  'POST /api/location': {
    controller: 'LocationController',
    action: 'create'
  },

  'POST /api/sublocation': {
    controller: 'SublocationController',
    action: 'create'
  },

  'POST /api/user': {
    controller: 'UserController',
    action: 'create'
  },

  /**
   * PUT (update) routes
   */
  'PUT /api/climb': {
    controller: 'ClimbController',
    action: 'update'
  },

  'PUT /api/location': {
    controller: 'LocationController',
    action: 'update'
  },

  'PUT /api/sublocation': {
    controller: 'SublocationController',
    action: 'update'
  },

  'PUT /api/user': {
    controller: 'UserController',
    action: 'update'
  },

  /**
   * DELETE (delete) routes
   */
  'DELETE /api/climb/:id': {
    controller: 'ClimbController',
    action: 'destroy'
  },

  'DELETE /api/location/:id': {
    controller: 'LocationController',
    action: 'destroy'
  },

  'DELETE /api/sublocation/:id': {
    controller: 'SublocationController',
    action: 'destroy'
  },

  'DELETE /api/user/:id': {
    controller: 'UserController',
    action: 'destroy'
  },

  /**
   * Administrative Routes
   */
  'POST /api/admin/createBulkSublocations': {
    controller: 'AdminController',
    action: 'createBulkSublocations'
  },

  /**
   * Authentication Routes
   */
  'POST /api/register/email': {
    controller: 'UserController',
    action: 'registerEmail'
  },

  'POST /api/login/email': {
    controller: 'UserController',
    action: 'loginEmail'
  }

};
