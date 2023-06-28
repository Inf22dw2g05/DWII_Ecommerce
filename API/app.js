const express = require('express');
const basicAuth = require('basic-auth');
const app = express();
const port = 3000;
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const db = require('./models/index');
const router = require('./Router/router');
const config = require('../API/config/config');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./controllers/swaggerConfig");
const passport = require("./passport/passport");
const sessionOptions = {

  secret: "my top secret key",

  resave: false,

  saveUninitialized: true,

};

const authenticate = (req, res, next) => {
  const credentials = basicAuth(req);

  if (!credentials || credentials.name !== 'Alesandro0012' || credentials.pass !== 'Caboverde21') {
    res.set('WWW-Authenticate', 'Basic realm="Autenticação requerida"');
    return res.status(401).send('Credenciais inválidas.');
  }

  next();
};

app.use(authenticate);
app.use('/', router );
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));

// Rota para mensagem após autenticação bem-sucedida
app.get('/', (req, res) => {
  res.send('Autenticação bem-sucedida!');
});

// Rota para o Swagger UI configuration
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
  console.log('http://localhost:3000/');
});
