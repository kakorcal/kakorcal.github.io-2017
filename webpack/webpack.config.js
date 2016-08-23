const prod = require('./webpack.prod.config');
const validate = require('webpack-validator');
var config;

switch(process.env.npm_lifecycle_event){
  case 'dev':
    break;
  case 'prod':
    config = prod;
    break;
  case 'deploy':
    config = prod;
  default:
    throw 'Invalid Command'
}

module.exports = validate(config);