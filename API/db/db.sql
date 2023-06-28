CREATE DATABASE plataforma_vendas;

USE plataforma_vendas;

CREATE TABLE usuarios
                (id INTEGER PRIMARY KEY ,
                nome varchar(20) NOT NULL,
                email varchar(20) NOT NULL,
                senha varchar(10) NOT NULL);


CREATE TABLE produtos
                (id INTEGER PRIMARY KEY ,
                nome varchar(50) NOT NULL,
                descricao varchar(100),
                preco FLOAT,
                quantidade int);
            

CREATE TABLE categorias
                (id INTEGER PRIMARY KEY ,
                  nome varchar(20)
                );
                
            

CREATE TABLE pedidos
                (id INTEGER PRIMARY KEY ,
                id_usuario INTEGER NOT NULL,
                data_pedido DATE,
                status_pedido TEXT NOT NULL,
                valor_total FLOAT,
                FOREIGN KEY (id_usuario) REFERENCES usuarios(id));
            

CREATE TABLE itens_pedido
                (id INTEGER PRIMARY KEY ,
                id_pedido INTEGER ,
                id_produto INTEGER ,
                quantidade INTEGER ,
                preco_unitario FLOAT NOT NULL,
                FOREIGN KEY (id_pedido) REFERENCES pedidos(id),
                FOREIGN KEY (id_produto) REFERENCES produtos(id));
            


