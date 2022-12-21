import Chart from 'chart.js/auto'
import { ChoroplethChart } from 'chartjs-chart-geo';
import * as ChartGeo from 'chartjs-chart-geo';
const belgium = await fetch('/map/belgium-map.json').then(r => {
    return r.json();
}).catch(e =>
    console.log(e));

const municipalities = ChartGeo.topojson.feature(belgium, belgium.objects.municipalities).features;
var projection = ChartGeo.geoMercator()
new ChoroplethChart(document.getElementById('canvas').getContext('2d'),
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
                            value: d.properties.population ? d.properties.population : 10,
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