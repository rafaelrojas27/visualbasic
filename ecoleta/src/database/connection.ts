import knex from 'knex';
import path from 'path';
const connection = knex({
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite3')//retorna o caminho do diretório
    },
});

export default connection;

//Migrations = Histórico do banco de dados
// 