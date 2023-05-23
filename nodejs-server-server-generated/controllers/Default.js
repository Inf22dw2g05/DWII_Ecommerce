'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.pedidosIdDELETE = function pedidosIdDELETE (req, res, next, id) {
  Default.pedidosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pedidosPOST = function pedidosPOST (req, res, next, body) {
  Default.pedidosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.produtosGET = function produtosGET (req, res, next) {
  Default.produtosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuariosIdDELETE = function usuariosIdDELETE (req, res, next, id) {
  Default.usuariosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuariosIdGET = function usuariosIdGET (req, res, next, id) {
  Default.usuariosIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuariosPOST = function usuariosPOST (req, res, next, body) {
  Default.usuariosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
