var nome = new Array();

document.body.onkeypress = tecla;
        
function tecla(){
    var cap_key = event.keyCode;
    move(cap_key);
    alert(cap_key);     
}


function add(){
   nome.push(document.getElementById('nome').value);
   document.getElementById('nome').value = ""; 
}

function clean(){
    nome = new Array();
}

function show(){
    var i=0;
    var str="";
    while(i < nome.length){
        str+=nome[i]+" <br>"
        i++;
    }
    document.getElementById("result2").innerHTML=str;
}