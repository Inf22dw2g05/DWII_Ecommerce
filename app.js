const express = require('express');
const bodyParser = require("body-parser");
const session = require("express-session");
const swaggerSpec = require('./db/controllers/swaggerConfig');
const swaggerUi = require('swagger-ui-express')
const db = require("./db/models");
const cors = require('cors');
const port = 3000;
const cookieSession = require('cookie-session');
const passport = require('passport');
const router = require('./routers/router')
require('./passport/passport');
const auth = require('./passport/auth')

// app.use(cookieSession({
//     name: 'Alesandro-session',
//     keys: ['key1', 'key2'],
//     maxAge: 24 * 60 * 60 * 1000, // Tempo de expiração do cookie (1 dia)
//   }));
const app = express();
const sessionOptions = {
    secret: "my top secret key",
    resave: false,
    saveUninitialized: true,
}; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionOptions));
app.use('/', router);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send('Autenticação bem-sucedida!');
  });
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
    console.log("Acesse a rota http://localhost:3000/auth/github para efetuar o login")
    console.log("Server is running on port 3000: http://localhost:3000");
    console.log("Server is running on port 3000: http://localhost:3000/docs")
})


