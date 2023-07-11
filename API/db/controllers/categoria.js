const express = require('express');
const router= express.Router();
const db = require('../models/categoria');
const categoria = require('../models/categoria')
const { where } = require('sequelize');


// criar rota get
router.get("/categoria", async (req, res) => {
    const categoria = await db.categoria.findAll({
        attributes: ['nome']
    })
    if (categoria){
        return res.json({categoria:categoria});
    }else{
        return res.status(400).json({
            mensagem: "Erro: Nenhuma categoria encontrado!"
        });
    } 
});

// criar rota get by id
router.get("/categoria/:id", async (req, res) => {
    const {id} = req.params;
    const categoria = await db.categoria.findOne({
        attributes: ['id','nome'],
        where: {id},
    })

    if (categoria) {
        return res.json({categoria:categoria.dataValues});
    }else{
        return res.status(404).json({ mensagem: 'Categoria não encontrada', });
    }
});

// criar rota post
router.post("/categoria", async (req, res) => {
    var dados = req.body;
    console.log(dados);

    await db.categoria.create(dados).then((nome)=>{
        return res.json({
            mensagem: "Categoria criado com sucesso",
            nome
        });
    }).catch(()=>{
        return res.json({
            mensagem: "Categoria não foi criado",
        });
    });
});
  

// criar a rota put 
router.put('/categoria', async (req, res) => {
    var dados = req.body;
    await db.categoria.update(dados,{where: {id: dados.id}}).then(()=>{
        return res.json({
            mensagem: "Categoria atualizado com sucesso"
        });
    }).catch(()=>{
        return res.status(400).json({
            mensagem: "Categoria não foi atualizado",
        });
    });
    
});
  
// Deletar categoria by id 
router.delete('/categoria/:id', async (req, res) => {
    const { id } = req.params;
    await db.categoria.destroy({
        where:{id:id},
    }).then(()=>{
        return res.json({
            mensagem: "Categoria deletado com sucesso"
        });
    }).catch(()=>{
        return res.status(400).json({
            mensagem: "Categoria não foi apagado"
        });
    });
      
});


module.exports = router;