const db = require("./models");


const mysql = require('mysql2');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

connection.connect( function (err) {
    console.log("Conexão com o banco de dados realizado com sucesso!");
});

connection.query("SELECT id, nome, email, senha FROM usuario" , function(err, rows, fields){
    if(err){
        console.log("Resultado:", rows);
    }else{
        console.log('Erro: Consulta não realizada com sucesso!');
    }
})
