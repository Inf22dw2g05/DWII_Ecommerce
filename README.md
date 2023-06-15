COMO INICIALIZAR O PROJETO 
Instalar todas as dependencias indicadas pelo package.json
### npm install

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Sequelize é uma bilioteca javascript que facilita o gerenciamento de banco de dados  SQL
### npm install --save sequelize

Instalar o drive de banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados.
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config.
### npx sequelize-cli init

Rodar o projeto
### node app.js

### npm install --save dotenv

Criar migrations
### npx sequelize-cli migration:generate --name create-users

Executar migrations
### npx sequelize-cli db:migrate  
