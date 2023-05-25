const { Pedidos } = require('../models');

// Método GET - Obter todos os pedidos
const getAllPedido = async (req, res) => {
  try {
    const pedidos = await Pedidos.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os pedidos.' });
  }
};

// Método POST - Criar um novo pedido
const createPedido = async (req, res) => {
    const { data, situacao, valor } = req.body;
    try {
      const novoPedido = await Pedidos.create({ data, situacao, valor });
      res.status(201).json(novoPedido);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o pedido.' });
    }
};

// Método PUT - Atualizar um pedido existente
const updatePedido = async (req, res) => {
    const { id } = req.params;
    const { data, situacao, valor } = req.body;
    try {
      const pedido = await Pedidos.findByPk(id);
      if (!pedido) {
        res.status(404).json({ error: 'Pedido não encontrado.' });
      } else {
        await pedido.update({ data, situacao, valor });
        res.json(pedido);
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o pedido.' });
    }
};

// Método DELETE - Excluir um pedido existente
const deletePedido = async (req, res) => {
    const { id } = req.params;
    try {
      const pedido = await Pedidos.findByPk(id);
      if (!pedido) {
        res.status(404).json({ error: 'Pedido não encontrado.' });
      } else {
        await pedido.destroy();
        res.status(204).end();
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o pedido.' });
    }
};
 
module.exports = {
  getAllPedido,
  createPedido,
  updatePedido,
  deletePedido,
};

  