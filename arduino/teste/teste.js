

//console.log( {resultado} )

//dobro.dobro2(d2);

function enviar(){
    var n1=parseInt(document.getElementById('n1').value);
    var numero = require('./dobro.js');
    var resultado = numero(n1);

    document.getElementById('volta').innerHTML=resultado;//resultado;   
  }