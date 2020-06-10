var count=0;
        document.body.onkeypress = tecla;
        
        function tecla(){
            var cap_key = event.keyCode;
            move(cap_key);
            //alert(cap_key);     
        }

        function move(move){ 
            
           switch(move){
            case 119: moveUp(); break;
            case 115: moveDown(); break;
            case 97: moveLeft(); break;
            case 100: moveRigh(); break;
            default: moveUp(); break;
            }
        }
        
        function moveUp(){
            switch (count){
                case 0: document.getElementById("move").src="pics/b1.png"; count+=1;break;
                case 1: document.getElementById("move").src="pics/b2.png"; count+=1;break;
                case 2: document.getElementById("move").src="pics/b3.png"; count+=1;break;
                case 3: document.getElementById("move").src="pics/b4.png"; count=0; break;     
                default: count=0;
            }
        }

        function moveDown(){
            switch (count){
                case 0: document.getElementById("move").src="pics/1.png"; count+=1;break;
                case 1: document.getElementById("move").src="pics/2.png"; count+=1;break;
                case 2: document.getElementById("move").src="pics/3.png"; count+=1;break;
                case 3: document.getElementById("move").src="pics/4.png"; count=0; break;     
                default: count=0;
            }
        }
        function moveLeft(){
            switch (count){
                case 0: document.getElementById("move").src="pics/l1.png"; count+=1;break;
                case 1: document.getElementById("move").src="pics/l2.png"; count+=1;break;
                case 2: document.getElementById("move").src="pics/l3.png"; count+=1;break;
                case 3: document.getElementById("move").src="pics/l4.png"; count=0; break; 
                default: count=0;    
            }
        }
        function moveRigh(){
            switch (count){
                case 0: document.getElementById("move").src="pics/r1.png"; count+=1;break;
                case 1: document.getElementById("move").src="pics/r2.png"; count+=1;break;
                case 2: document.getElementById("move").src="pics/r3.png"; count+=1;break;
                case 3: document.getElementById("move").src="pics/r4.png"; count=0; break;     
                default: count=0;
            }
        }

        //document.onkeydown=applyKey;
        
        function open_chest(){ //Função responsável pela abertura do baú
            document.getElementById("bau").src = "pics/bau_aberto.png";
        }
        function close_chest(){//Função responsável pele fechamento do baú
            document.getElementById("bau").src = "pics/bau_fechado.png";
        }