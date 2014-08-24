<script>
var width = 800;
var dublado = 64.46;
var legendado = 35.54;
var c = document.getElementById("myCanvas");
var barDublado = c.getContext("2d");
barDublado.fillStyle = "#0099ff";
barDublado.fillRect(0,0,width*(dublado/100),50);
var barLegendado = c.getContext("2d");
barLegendado.fillStyle = "#FF0000";
barLegendado.fillRect(width*(dublado/100),0,800-width*(dublado/100),50);

var textDublado = c.getContext("2d");
textDublado.fillStyle = "white";
textDublado.font = "25px Arial";
textDublado.fillText(dublado + "% Dublado", ((width*(dublado/100))/2)-100, 35);

var textLegendado = c.getContext("2d");
textLegendado.fillStyle = "white";
textLegendado.font = "25px Arial";
textLegendado.fillText(legendado + "% Legendado", (((width*(dublado/100))/2)+((width*(legendado/100))/2))+150, 35);    
</script>
  <script type="text/javascript">
stats.PorFilme.data = [];
for(i = 0; i < stats.PorFilme.Filmes.length; i++)
{
    stats.PorFilme.data[i] = {};
    stats.PorFilme.data[i].label = stats.PorFilme.Filmes[i];
    stats.PorFilme.data[i].y = stats.PorFilme.Valores[i];
    stats.PorFilme.data[i].x = stats.PorFilme.Filmes.length - i;
}      
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {

        axisX:{
                        interval: 1,
                        gridThickness: 0
        },
      data: [
      {        
        axisYType: "secondary",
        type: "bar",
        dataPoints: stats.PorFilme.data
      }
        
      ]
      ,
      legend:{
        cursor:"pointer",
        itemclick:function(e) {
          if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible){
            e.dataSeries.visible = false;
          }
          else {
            e.dataSeries.visible = true;
          }
          
          chart.render();
        }
      }
    });

    chart.render();
  }
  </script>
 <script type="text/javascript" src="canvasjs.min.js"></script></head>            
<script>
function renderChart(chart,label,labels,data,legendTemplate)
{
    var ctx = document.getElementById(chart).getContext("2d");
    var data = {
        labels: labels,
        datasets: [
            {
                label: label,
                fillColor: "#0099FF",
                strokeColor: "#0099FF",
                highlightFill: "#0099FF",
                highlightStroke: "#0099FF",
                data: data
            }
        ]
    };    
    var options = {
			responsive : true
		};
    if (legendTemplate != null)
    {
        options.legendTemplate = legendTemplate;
    }        
console.log(options);    
    var barChart = new Chart(ctx).Bar(data, options);    
}
renderChart('chartRede','Redes de Cinema',stats.PorRede.Redes,stats.PorRede.Valores);
//renderChart('chartFilmes','Campeões da falta de escolha',stats.PorFilme.Filmes,stats.PorFilme.Valores);
//renderChart('chartCidades','Cidades',stats.PorCidade.Cidades,stats.PorCidade.Valores);
</script>
