'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.addEnvironment = function addEnvironment (req, res, next) {
  var environmentItem = req.swagger.params['environmentItem'].value;
  Admins.addEnvironment(environmentItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
