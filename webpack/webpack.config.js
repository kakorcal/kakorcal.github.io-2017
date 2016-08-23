const dev = require('./webpack.dev.config');
const prod = require('./webpack.prod.config');
const validate = require('webpack-validator');
var config;

switch(process.env.npm_lifecycle_event){
  case 'dev':
    config = dev;
    break;
  case 'prod':
    config = prod;
    break;
  default:
    throw 'Invalid Command'
}

module.exports = validate(config);