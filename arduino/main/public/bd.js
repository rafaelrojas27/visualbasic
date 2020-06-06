//Conecta ao BD
const Sequelize = require ('sequelize');
const sequelize = new Sequelize('iot', 'rafael', 'rafael27', {
    host: 'localhost',
    dialect: 'mysql'
});

//Fala se conectou ou não
/*sequelize.authenticate().then(function(){
    console.log("Conectado AO DB");
    //document.getElementById("bd").innerHTML="Conectado e Dados estão indo para o DB"
}).catch(function(erro){
    console.log("Não conectado");
});
*/

//Cria Tabela dados com 2 campos

const Dados = sequelize.define('dados',{
    numero_potenc:{
        type: Sequelize.STRING
    },
    perc_potenc:{
        type: Sequelize.STRING
    }
})

//Cria tabela de contagem de LED
const contLed = sequelize.define('times',{
  vezes:{
    type: Sequelize.INTEGER
  }
});

//Efetua a criação
//Dados.sync({force: true});
//contLed.sync({force: true});//Efetua a criação
Dados.create({
  numero_potenc:'666',
  perc_potenc:'666'
});

contLed.create({
  vezes:1
});

//function dados(){


//}

//function led(123){
  //var cont;
  //if(x=="a"){
   // cont+=1;
    //contLed.create({
      //vezes:123
    //});
    //return "Led incluido no DB";
  //}else{
    //return "Led não incluido no DB"
  //}
   
//}