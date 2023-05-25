import db from "./models";


import { getAllUser, createUser, updateUser, deleteUser } from './controllers/usersController';
import { getAllPedido, createPedido, updatePedido, deletePedido } from './controllers/pedidosController';
import { getAllProduto, createProduto, updateProduto, deleteProduto } from './controllers/produtosController'; 
import { getAllCategoria, createCategoria, updateCategoria, deleteCategoria } from './controllers/categoriasController';
import { createConnection } from 'mysql2';
import express, { json } from 'express';
import { json as _json } from 'body-parser';
import cors from 'cors';

const app = express();
app.use(json());
app.use(_json());
app.use(cors());

app.get('/users', getAllUser);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

app.get('/pedidos', getAllPedido);
app.post('/pedidos', createPedido);
app.put('/pedidos/:id', updatePedido);
app.delete('/pedidos/:id', deletePedido);


app.get('/produtos', getAllProduto);
app.post('/produtos', createProduto);
app.put('/produtos/:id', updateProduto);
app.delete('/produtos/:id', deleteProduto);

app.get('/categorias', getAllCategoria);
app.post('/categorias', createCategoria);
app.put('/categorias/:id', updateCategoria);
app.delete('/categorias/:id', deleteCategoria);

const connection = createConnection({
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
const port = 3001;
app.listen(port, () => console.log(`Servidor na porta ${port}`));