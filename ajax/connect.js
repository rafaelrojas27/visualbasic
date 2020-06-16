const express = require('express'); 
const http = require('http');
const express2 = require('express');

const app=express2();

const server = http.createServer(app);

server.listen(9999,'localhost',()=>{

});

app.get('/', (req, res, next)=>{ // Definição da rota, sendo raiz na URL
    res.sendFile(__dirname + '/index.html') // Nome da página web, ele abreo index
});
