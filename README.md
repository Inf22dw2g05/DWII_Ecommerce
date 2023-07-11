COMO FOI FEITO ESTE PROJECTO

Criar o arquivo packege
### npm init


Instalar todas as dependencias indicada pelo package.json
### npm install

Iniciar o projeto
### node app.js


SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init


Manipular variaveis de ambiente
### npm install --save dotenv 

Criar a migration
### npx sequelize-cli migration:generate --name create-usuarios 

Instalar a dependencia nodemon
### npm install -g nodemon

Instalar a dependencia como desenvolvedor para reiniciar o servidor
### npm install --save-dev nodemon

Rodar o projeto usando o nodemon
### nodemon app.js

Abrir o endereço no navegador
### http://localhost:3000