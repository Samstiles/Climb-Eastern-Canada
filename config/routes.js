module.exports.routes = {

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
  }

};
