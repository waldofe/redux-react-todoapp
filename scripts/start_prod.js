var server = require('pushstate-server');

console.log('Running production server!');
server.start({ port: process.env.PORT || 8080, directory: './build' });
