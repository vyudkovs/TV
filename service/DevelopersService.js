'use strict';


/**
 * gets a list of environments
 * Get all environments 
 *
 * searchString String pass an optional search string for looking up inventory (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.getEnvironments = function(searchString,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "manufacturer" : {
    "phone" : "408-867-5309",
    "name" : "ACME Corporation",
    "homePage" : "https://www.acme-corp.com"
  }
}, {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "manufacturer" : {
    "phone" : "408-867-5309",
    "name" : "ACME Corporation",
    "homePage" : "https://www.acme-corp.com"
  }
}, {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "name" : "This is a test",
  "id" : "d290f1e1-6c54-4b01-90e6-d701748f0851",
  "manufacturer" : {
    "phone" : "111-867-5309",
    "name" : "Test corp",
    "homePage" : "https://www.yahoo.com"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

