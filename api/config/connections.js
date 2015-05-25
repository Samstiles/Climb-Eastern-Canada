module.exports.connections = {
  development_mongo: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017
  },
  production_mongo: {
    adapter: 'sails-mongo',
    host: 'ds041831.mongolab.com',
    port: 41831,
    user: 'heroku_app21316608',
    password: 'jhkod0dqbnm5ncn2aohoi7aohj',
    database: 'heroku_app21316608'
  },
  production_mysql: {
    adapter: 'sails-mysql',
    host: 'us-cdbr-iron-east-01.cleardb.net',
    port: 3306,
    user: 'bbc808d4cd292d',
    password: 'ec6dd079',
    database: 'heroku_4ed2a93dac935b9'
  }
};