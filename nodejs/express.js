const express = require('express');
const app = express();




app.get('/', function(req, res){
    res.send("teste");
});

app.get('/teste2/:cargo/:nome', function(req, res){
    res.send(req.params.cargo+" "+req.params.nome);

});


app.listen(8081, function(){

});