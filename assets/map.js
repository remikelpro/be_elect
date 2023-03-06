import Chart from 'chart.js/auto'
import { ChoroplethChart } from 'chartjs-chart-geo';
import * as ChartGeo from 'chartjs-chart-geo';
$(document).ready(async ()=>{
    console.log('asd');
    const belgium = await fetch('/map/belgium-map.json').then(r => {
        return r.json();
    }).catch(e =>
        console.log(e));
    
    const municipalities = ChartGeo.topojson.feature(belgium, belgium.objects.municipalities).features;
    var projection = ChartGeo.geoMercator()
    new ChoroplethChart(document.getElementById('mapMap').getContext('2d'),
        {
            type: 'choropleth',
            data: {
                labels: municipalities.map((d) => (d.properties.name_fr)),
                datasets: [
                    {
                        label: 'municipalities',
                        outline: municipalities,
                        data: municipalities.map((d) => (
                            {
                                feature: d,
                                value: d.properties.name_fr ? d.properties.population : 10,
                            })),
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                },
                scales: {
                    projection: {
                        axis: 'x',
                        projection: projection,
                    }
                }
            }
        });
    
    
    // DONUT
    const data = {
        responsive: true,
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 1
        }]
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
          rotation: -90,
          circumference: 180,
      }
    };
    let donut = new Chart(document.getElementById('donutGraph').getContext('2d'), config)
    
    window.addEventListener('before', () => {
        donut.resize(500, 500);
    });
    window.addEventListener('afterprint', () => {
        donut.resize();
    });
})
