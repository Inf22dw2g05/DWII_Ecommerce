const { Categoria } = require('../models/categorias');

// Método GET - Obter todas as categoria
const getAllCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findAll();
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter as categorias.' });
  }
};

// Método POST - Criar uma nova categoria
const createCategoria = async (req, res) => {
    const { nome} = req.body;
    try {
      const novaCategoria = await Categoria.create({ nome });
      res.status(201).json(novaCategoria);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar a categoria.' });
    }
};

// Método PUT - Atualizar uma categoria existente
const updateCategoria = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    try {
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        res.status(404).json({ error: 'categoria não encontrado.' });
      } else {
        await categoria.update({ nome });
        res.json(categoria);
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar a categoria.' });
    }
};

// Método DELETE - Excluir uma categoria existente
const deleteCategoria = async (req, res) => {
    const { id } = req.params;
    try {
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        res.status(404).json({ error: 'Categoria não encontrado.' });
      } else {
        await categoria.destroy();
        res.status(204).end();
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir a categoria.' });
    }
};
 
module.exports = {
  getAllCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
};