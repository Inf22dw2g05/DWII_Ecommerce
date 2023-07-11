const express = require('express');
const router = express.Router();

const db = require('../models');
const usuario = require('../models/usuario');
const { where } = require('sequelize');

//criar a rota get
router.get("/usuario", async (req, res) => {
    const usuario = await db.usuario.findAll({
        attributes: ['nome', 'sobrenome', 'email'],
        order:[['id', 'DESC']]
    })

    if (usuario){
        return res.json({usuario: usuario});

    }else{
        return res.status(400).json({
            mensagem: "Erro: Nenhum usuario encontrado!",
        });
    } 
})

// criar rota get by id
router.get("/usuario/:id", async (req, res) => {
    const {id} = req.params;
    const usuario = await db.usuario.findOne({
        attributes: ['id', 'nome', 'sobrenome', 'email'],
        where: {id},
    })

    if (usuario) {
        return res.json({usuario:usuario.dataValues});
    }else{
        return res.status(404).json({ mensagem: 'Usuario não encontrado' });
    }
});

// Criar usuario
router.post("/usuario", async (req, res)=>{
    var dados = req.body;
    console.log(dados);

    await db.usuario.create(dados).then((nome, sobrenome, email) => {
        return res.json({
            mensagem: "Usuario criado com sucesso",
            nome,
            sobrenome,
            email
        });
    }).catch(()=>{
        return res.json({
            mensagem: "Erro ao criar usuario",
        });
    });
});

// // criar rota post
// router.post("/usuario", async (req, res) => {
//     try {
//       const { nome, sobrenome, email } = req.body;
//       const {dados} = req.body;
//       console.log(dados)
 
//       const usuario = await db.usuario.create(dados).then((nome, sobrenome, email) =>{
//         return res.json({
//             mensagem: "Usuario criado com sucesso", nome, sobrenome, email
//         });
//       }).catch(()=>{
//         return res.json({
//             messagem:"Erro ao criar o usuario"
//         });
//       });
  
//       //return res.json(usuario);
//     // } catch (error) {
//     //   return res.status(400).json({
//     //     mensagem: "Erro ao criar Usuario!"
//     //   });
    

// criar a rota put 
router.put('/usuario/:id', async (req, res) => {
    var dados = req.body;
    await db.usuario.update(dados,{where: {id:dados.id}}).then(()=>{
        return res.json({
            mensagem: "Usauario atualizado com sucesso"
        });
    }).catch(() => {
        return res.status(400).json ({
            mensagem: "Usuario não atulizado",
        });
    });
    
});
  
// Deletar usuario by id
router.delete("/usuario/:id", async (req, res) =>{
    const {id} = req.params;
    await db.usuario.destroy({
        where: {id:id},
    }).then(()=>{
        return res.json({
            mensagem: "Usuario deletado com sucesso"
        });
    }).catch(()=>{
        return req.status(400).json({
            mensagem: "Usuario não foi apagado",
        });
    });
});
   


module.exports = router;

