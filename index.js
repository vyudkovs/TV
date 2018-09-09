'use strict';

import fs from 'fs';
import path from 'path';
import http from 'http';

import app  from 'connect';
var _app = app();

import swaggerTools  from 'swagger-tools';
import jsyaml  from 'js-yaml';
let serverPort = 8080;

// swaggerRouter configuration
let options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
let spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
let swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  _app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  _app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  _app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  _app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(_app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });

});
