import express, { request, response } from 'express'; //Ajuda na definição de rotas
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);



app.listen(9999);//Ouve a porta da aplicação