'use strict';

var utils = require('../utils/writer.js');
var developers = require('../service/developersService');

module.exports.getEnvironments = function getEnvironments (req, res, next) {
  var searchString = req.swagger.params['searchString'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  developers.getEnvironments(searchString,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
