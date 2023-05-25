const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const session = require('express-session');
const passport = require('passport');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// start server
app.listen(port, function () {
 console.log(`app running on localhost:${port}`);
}); 
// Configuração da sessão
app.use(session({
    secret: 'Dexterdebrit0',
    resave: false,
    saveUninitialized: false
}));

// Configuração do Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware de autenticação personalizado
function auth(req, res, next) {
    if (req.isAuthenticated()) {
      // O usuário está autenticado
      return next();
    }
    // Redireciona para a página de login ou envia uma resposta de erro
    res.redirect('/login');
}

// Rotas protegidas que requerem autenticação
app.get('/profile', auth, (req, res) => {
    // Apenas usuários autenticados podem acessar essa rota
    res.send('Perfil do usuário');
});
  

app.get("/", auth, function (req, res) {
  res.sendFile(__dirname + "/public/protected.html");
});
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/login.html");
});

const GITHUB_CLIENT_ID = "2416e192900c4a1e59b1";
const GITHUB_CLIENT_SECRET = "9efe20db3e2d2616b50fa15be7eee3c150c0dfc4";
const GITHUB_CALLBACK_URL = "http://localhost:3000/auth/github/callback";


const GitHubStrategy = require("passport-github2").Strategy;

   
app.get("/me", auth, function (req, res) {
    res.json(req.user);
});

// Serialization and Deserialization functions (required for persistent sessions) 
passport.serializeUser(function (user, done) { done(null, user); });
passport.deserializeUser(function (user, done) { done(null, user); });

const passportOptions = {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: GITHUB_CALLBACK_URL,
};

passport.use( new GitHubStrategy(passportOptions, 
    function ( accessToken, refreshToken, profile, done ) {
    /* FLOW #3 : accessToken and refreshToken are self explanatory;
    profile is the json result from GitHub which contains helpful information like id, username, mail, etc...
    We can decide to use profile.id as an internal UserID;
    Here we can call the database and check if the user already exists and create a new record if not.
    */
    profile.token = accessToken;
    return done(null, profile);
    })
);
const sessionOptions = {
    secret: "Dexterdebrit0",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.get("/logout", function (req, res) {
    req.logout();
    res.sendFile(__dirname + "/public/login.html");
});

// FLOW #1: Sign in with github.
app.get("/auth/github", passport.authenticate("github", { scope: ["user:tiagor.debrito@gmail.com"] }), function (req, res) {} );
   // FLOW #2: GitHub response will arrive here
   // redirect to /login if failure
   // redirect to / if success;
app.get("/auth/github/callback", passport.authenticate("github", { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/");
    }
);
const axios = require("axios");

app.get("/githubme", auth, function (req, res) {
    const token = req.user.token;
    axios.get("https://api.github.com/tiagor.debrito@gmail.com", {headers: { Authorization: `Bearer ${token}` } })
        .then(function (response) {
            res.json(response.data);
        }).catch(function(err){
            res.json(err);
        });
});

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = { openapi: "3.0.0",
info: {
    title: "OAuth2.0_01",
    version: "1.0.0",
    description: "Example OAuth2.0 protected API",
    contact: { name: "Tiagodebrit0" },
},
servers: [{ url: "http://localhost:" + port }],
components: { securitySchemes: {
    OAuth2Security: {
        type: "oauth2",
        flows: { authorizationCode: {
            authorizationUrl: "https://github.com/login/oauth/authorize",
            tokenUrl: "https://github.com/login/oauth/access_token",    
            scopes: [], }, }, }, }, },
security: [{ OAuth2Security: [] }],
};

const options = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);
app.get("/docs/swagger.json", (req, res) => res.json(swaggerSpec));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3001, () => {
    console.log('Servidor em execução na porta 3001');
  });