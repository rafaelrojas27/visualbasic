const socket=io(); 

let counter=2;//Orienta o eixo X
socket.on('serial:data', function(dataSerial){
    
    console.log(dataSerial);
    myChart.data.labels.push(counter);//preenche o eixo X com o contador
    myChart.data.datasets.forEach(dataset => {
        dataset.data.push(dataSerial.value);
    });
    counter=counter+2;
    myChart.update();
});

var ctx = document.getElementById('meuGrafico').getContext('2d');//Biblioteca chart.org - nome ID do meuGrafico recolhida
var myChart = new Chart(ctx, {//Objeto new Chart
    type: 'line',
    data: {
        labels: ['Serial'],
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