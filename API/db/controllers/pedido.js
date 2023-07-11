const express = require('express');
const router= express.Router();
const db = require('../models');
const pedido = require('../controllers/pedido')
const { where } = require('sequelize');


// criar rota get
router.get("/pedido", async (req, res) => {
    const pedido = await db.pedido.findAll({
        attributes:['data', 'situacao','valor'],
        order:[['id','DESC']]
    })
    if (pedido){
        return res.json ({pedido:pedido});
    }else{
        return res.status(400).json({
            mensagem: "Pedido não encontrado",
        });
    } 
});

// criar rota get by id
router.get("/pedido/:id", async (req, res) => {
    const {id} = req.params;
    const pedido = await db.pedido.findOne({
        attributes: ['id', 'data', 'situacao', 'valor'],
        where: {id},
    })

    if (pedido) {
        return res.json({pedido:pedido.dataValues});
    }else{
        return res.status(400).json({ mensagem: 'Pedido não encontrado' });
    }
});


// criar rota post
router.post("/pedido", async (req, res) => {
    var dados = req.body;
    console.log(dados);

    await db.pedido.create(dados).then((data, situacao, valor)=>{
        return res.json({
            mensagem: "Pedido criado com sucesso",
            data,
            situacao,
            valor
        });
    }).catch(()=>{
        return res.json({
            mensagem: "Pedido não criado",
        });
    });
    
});
  

// criar a rota put 
router.put('/pedido/:id', async (req, res) => {
    var dados = req.body;
    await db.pedido.update(dados,{where: {id: dados.id}}).then(()=>{
        return res.json({
            mensagem: "Pedido atualizado com sucesso"
        });
    }).catch(()=>{
        return res.status(400).json({
            mensagem: "Pedido não atualizado",
        });
    });
       
});
  
// Deletar pedido by id
router.delete('/pedido/:id', async (req, res) => {
    const {id} = req.params;
    await db.pedido.destroy({
        where:{id:id},
    }).then(()=>{
        return res.json({
            mensagem: "Pedido deletado com sucesso"
        });
    }).catch(()=> {
        return res.status(400).json({
            mensagem: "Pedido não deletado",
        });
    });
  
});


module.exports = router;