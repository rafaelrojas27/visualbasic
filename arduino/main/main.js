//Importando Bibliotecas
const SerialPort = require("serialport");
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

//Criando servidor
const app=express();
const server = http.createServer(app);

app.use(express.static('public')); //A pasta precisa ser declarada para p express entender que há arquivos estáticos lá

app.get('/', (req, res, next)=>{
    res.sendFile(_dirname + '/public/index.html') // Nome da página web
});

server.listen(9999,()=>{ //Definição da Porta
    console.log('Porta 127.1.1.1:%d', server.address().port); //Definição do meu IP
});
const io = socketio.listen(server); // Verifica o servidor o tempo todo



//Configuração da Serial
const Readline = SerialPort.parsers.Readline;
const parser = new Readline({delimiter: '\r\n'}); //Decodifica o Exadecimal em inteiro
const mySerial = new SerialPort("/dev/ttyUSB0", { //Parta Serial do Arduino
    baudRate:9600,
}); //Porta do arduino

mySerial.pipe(parser);
mySerial.on('open', function(){ //Abre a conexão
console.log('Conecxão Iniciada'); //Imprime na Log
    parser.on('data', function(data){
        console.log(data);//Imprime valor de entrada do Potenciômetro
        var dado = parseInt(((data*100)/1023)); //Transforma o valor do potenciômetro em %
        console.log(dado);//Imprime % do potenciômetro
        io.emit('serial:data',{ //Criação do evento
        value: dado.toString()//Quando chamado o evento ele manda o dado já convertido em String
        
        });
        //const bd=require('bd.js');
        //bd.dados(data,dado);
        //document.getElementById("bd2").innerHTML="Dados do potenciômetro foram pro DB"
    }); 
});

//Recebe os dados para enviar para o Arduino

io.sockets.on('connection', function(socket){
    console.log('Novo nó conectado');
    
    socket.on('btnAction', function(btn){
        var dado_web=btn.value;
        console.log(dado_web);
        mySerial.write(dado_web);
        console.log("Enviando "+ dado_web +" Para serial");   
    });
});

//Conecta ao DB