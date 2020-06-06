import path from 'path';

module.exports = {
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname,'database','database.sqlite')//retorna o caminho do diretório
    },
    migrations:{
            directory:path.resolve(__dirname,'database','migrations')
    }
};