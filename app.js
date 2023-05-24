const db = require("./models");


const userController = require('./controllers/usersController')
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

const connection = mysql.createConnection({
    host: 'localhost', // Host do banco de dados
    user: 'root', // Usuário do banco de dados
    password: '123456', // Senha do banco de dados
    database: 'db' // Nome do banco de dados
});

connection.connect(function(err) {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão com o banco de dados realizada com sucesso!');
        executeQuery();
    }
});
    
function executeQuery() {
    connection.query('SELECT id, firstName, lastName, email FROM users', function(err, rows, fields) {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
      } else {
        console.log('Resultado:', rows);
      }
        connection.end(); // Fecha a conexão com o banco de dados após a consulta
    });
}

// connection.query("SELECT id, firstName, lastName, email FROM users" , function(err, rows, fields){
//     if(err){
//         console.log("Resultado:", rows);
//     }else{
//         console.log('Erro: Consulta não realizada com sucesso!');
//         executeQuery();
//     }
// });
const port = 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));