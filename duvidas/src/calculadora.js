function calcular(n){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);

    switch (n){
      case "+": document.getElementById("result").innerHTML = soma(n1,n2);
      break;
      case "-": document.getElementById("result").innerHTML = sub(n1,n2);
      break;
      case "/": document.getElementById("result").innerHTML = div(n1,n2);
      break;
      case "*": document.getElementById("result").innerHTML = mult(n1,n2);
      break;
      default: document.getElementById("result").innerHTML= "Valor errado";
      break; 
    }  
}

function apagar(){
 document.getElementById("n1").value="";
 document.getElementById("n2").value="";
}

function soma(n1,n2){
return (n1+n2);
}

function sub(n1,n2){
    return n1-n2;  
}

function mult(n1,n2){
    return n1*n2;
}

function div(n1,n2){
    return n1/n2;
}