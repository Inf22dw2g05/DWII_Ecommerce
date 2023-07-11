const express = require('express');
const app = express();
const passport = require('passport');
const router = express.Router();


// Incluir o arquivo users em models
//const { usuario } = require('../db/models/usuario');

const usuario = require('../db/controllers/usuario');
const produto = require('../db/controllers/produto');
const pedido = require('../db/controllers/pedido');
const categoria = require('../db/controllers/categoria');
const swaggerSpec = require('../db/controllers/swaggerConfig')


app.use('/', usuario);
app.use('/', produto);
app.use('/', pedido);
app.use('/', categoria);


router.get('/usuario', async (req, res) => {
    const usuario = await usuario.findAll();
    res.json(usuario);
});

router.post('/usuario', async (req, res) => {
    const { name, sobrenome ,email, createAt, updateAt} = req.body;
    const usuario = await usuario.create({ name,sobrenome, email, createAt, updateAt });
    res.json(usuario);
});

router.get('/usuario/{id}', async (req, res) => {
    const { id } = req.body;
    console.log(id)
    const usuario = await usuario.findByPk();
    res.json(usuario);
  
    // if (!user) {
    //   return res.status(404).json({ error: 'User not found' });
    // }
  
    // res.json(user);
});

router.put('/usuario/{id}', async (req, res) => {
    const { id } = req.body.id;
    const { name, sobrenome, email } = req.body;
    const usuario = await usuario.findByPk(id);
  
    if (!usuario) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    usuario.name = name;
    usuario.sobrenome = sobrenome;
    usuario.email = email;
    await usuario.save();
  
    res.json(usuario);
 });
  
router.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const usuario = await usuario.findByPk(id);
  
    if (!usuario) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    await usuario.destroy();
  
    res.status(204).send();
  });  

  const auth = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    // If the user is not authenticated, return a 401 Unauthorized response
    // res.redirect("/auth/github");
    res.status(401).json({ error: 'Unauthorized' });
};

app.use('/protected', auth, function (req, res) {
  res.sendFile(__dirname + "/public/protected.html");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/login.html");
});



app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/login.html");
});


//${res.json(req.user)}
app.get('/erro', (req, res) => res.send("Erro ao logar"));
app.get('/auth/github',
    passport.authenticate('github', { scope: ['profile', 'email'] }));

    app.get('/auth/github/callback',
    passport.authenticate('github', {  scope: ['profile', 'email']  }),
    function (req, res) {

        // const accessToken = req.user.accessToken;
        // const refreshToken = req.user.refreshToken;
        // Successful authentication, redirect home.
        res.redirect('/docs');
    });

app.get('/sair', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
});

module.exports = app;