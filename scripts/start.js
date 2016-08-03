var CURRENT_ENV = process.env.NODE_ENV || 'development';

if (CURRENT_ENV == 'development') {
  require('./start_dev')
} else {
  require('./start_prod')
}