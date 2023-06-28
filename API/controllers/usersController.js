const { User } = require('../models/user');

// Método GET - Obter todos os usuários
const getAllUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os usuários.' });
  }
};

// Método GET - Obter um usuário pelo ID
const getUserById = async (req, res) => {
  const userId = req.params.id
  try{
    const user = await User.findByPk(userId);
    if(!user){
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json(user);
  }catch(error){
    res.status(500).json({ error: 'Erro ao obter o usuário.' });
  }
};

// Método POST - Criar um novo usuário
const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.create({ firstName, lastName, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o usuário.' });
  }
};

// Método PUT - Atualizar um usuário existente
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    } else {
      await user.update({ firstName, lastName, email });
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
  }
};

// Método DELETE - Excluir um usuário existente
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    } else {
      await user.destroy();
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o usuário.' });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser

};
