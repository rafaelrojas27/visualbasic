const socket=io(); 

let counter=2;//Orienta o eixo X
socket.on('serial:data', function(dataSerial){//Recebimento dos dados do potenciômetro
    
    console.log(dataSerial);
    myChart.data.labels.push(counter);//preenche o eixo X com o contador
    myChart.data.datasets.forEach(dataset => {
        dataset.data.push(dataSerial.value);//Coloca o valor do potenciômetro no array
    });
    counter=counter+2;//conta 2 segundos
    myChart.update();// atualiza o gráfico
});

var ctx = document.getElementById('meuGrafico').getContext('2d');//Biblioteca chart.org - nome ID do meuGrafico recolhida
var myChart = new Chart(ctx, {//Objeto new Chart
    type: 'line',//define o tipo do gráfico
    data: {
        labels: ['Serial'], //define as labels
        datasets: [{
            label: 'Serial',
            data: [],//Local onde os dados são colocados
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                /*'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'*/
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                /*'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'*/
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});