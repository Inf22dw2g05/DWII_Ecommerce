'use strict';


/**
 * Deletar um usuário pelo ID
 *
 * id Integer ID do usuário a ser deletado
 * no response value expected for this operation
 **/
exports.pedidosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Criar um novo pedido
 *
 * body Pedido 
 * no response value expected for this operation
 **/
exports.pedidosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obter a lista de produtos
 *
 * returns List
 **/
exports.produtosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "preco" : 0.8008281904610115,
  "imagem" : "imagem",
  "nome" : "nome",
  "quantidade" : 6,
  "descricao" : "descricao"
}, {
  "preco" : 0.8008281904610115,
  "imagem" : "imagem",
  "nome" : "nome",
  "quantidade" : 6,
  "descricao" : "descricao"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Excluir um usuário pelo ID
 *
 * id Integer ID do usuário a ser excluído
 * no response value expected for this operation
 **/
exports.usuariosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obter um usuário pelo ID
 *
 * id Integer ID do usuário a ser obtido
 * returns Usuario
 **/
exports.usuariosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senha" : "senha",
  "nome" : "nome",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Criar um novo usuário
 *
 * body Usuario 
 * no response value expected for this operation
 **/
exports.usuariosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

