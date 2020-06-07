$('button').click(function(){ //Recebimento de todo e qualquer valor de botão da página
    const call=io();
    var button= $(this).val();
    console.log(button); //Imprime a ou b de acordo com o botão
    call.emit('btnAction', { //Envia o valor do botão para o arduino
        value: button.toString() 
    });    
});