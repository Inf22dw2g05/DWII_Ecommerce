const express = require('express');
const router= express.Router();
const produto = require('../models/produto');
const db = require('../models');
const { where } = require('sequelize');


// criar rota get
router.get("/produto", async (req, res) => {
    const produto = await db.produto.findAll({
        attributes: ['nome', 'preco', 'quantidade'],
        order:[['id']] //ordenar por id
    });

    if (produto){
        return res.json({produto: produto});
    }else{
        return res.status(400).json({
            mensagem: "Erro: Nenhum produto encontrado!",
        });
    } 
});

// criar rota get by id
router.get("/produto/:id", async (req, res) => {
    const {id} = req.params;
    const produto = await db.produto.findOne({
        attributes: ['id', 'nome', 'preco', 'quantidade'],
        where: {id},
    })

    if (produto) {
        return res.json({produto:produto.dataValues});
    }else{
        return res.status(404).json({ error: 'produto não encontrado' });
    }
});


// criar rota post
router.post("/produto", async (req, res) => {
    var dados = req.body;
    console.log(dados);

    await db.produto.create(dados).then((nome, preco, quantidade)=>{
        return res.json({
            mensagem: "Produto criado com sucesso",
            nome,
            preco,
            quantidade
        });
    }).catch(()=>{
        return res.json({
            mensagem: "Produto não foi criado",
        });
    });
})
  


// criar a rota put 
router.put('/produto/', async (req, res) => {
    var dados = req.body;
    await db.reserva.update(dados, {where: {id: dados.id}}).then (()=>{
        return res.json({
            mensagem: "Produto atualizado com sucesso"
        });
    }).catch(()=>{
        return res.status(400).json({
            mensagem: "Produto não atualizado",
        });
    });
    
});
  
// 
router.delete('/produto/:id', async (req, res) => {
    const { id } = req.params;
    await db.produto.destroy({
        where: {id:id},
    }).then(()=>{
        return res.json({
            mensagem: "Produto deletado com sucesso"
        });
    }).catch(()=>{
        return res.status(400).json({
            mensagem: "Produto não deletado",
        });
    });
  
  
});


module.exports = router;