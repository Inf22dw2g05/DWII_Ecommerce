const { Produto } = require('../models');

// Método GET - Obter todos os produto
const getAllProduto = async (req, res) => {
  try {
    const produto = await Produto.findAll();
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os produto.' });
  }
};

// Método POST - Criar um novo produto
const createProduto = async (req, res) => {
    const { nome, preco, quantidade } = req.body;
    try {
      const novoProduto = await Produto.create({ nome, preco, quantidade });
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o produto.' });
    }
};

// Método PUT - Atualizar um produto existente
const updateProduto = async (req, res) => {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        res.status(404).json({ error: 'produto não encontrado.' });
      } else {
        await produto.update({ nome, preco, quantidade});
        res.json(produto);
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o produto.' });
    }
};

// Método DELETE - Excluir um produto existente
const deleteProduto = async (req, res) => {
    const { id } = req.params;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        res.status(404).json({ error: 'produto não encontrado.' });
      } else {
        await produto.destroy();
        res.status(204).end();
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir o produto.' });
    }
};
 
module.exports = {
  getAllProduto,
  createProduto,
  updateProduto,
  deleteProduto,
};