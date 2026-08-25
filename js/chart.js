

export function renderGraph(data, usedPercentageFinal) {

    try {

        var options = {
            series: data,
            chart: {
                type: 'donut',
                width: 400,
            },
            labels: [
                'Consumido',
                'Valor da Compra',
                'Restante'
            ],
            colors: ['#0EA5E9', '#F59E0B', '#14B8A6'],
            plotOptions: {
                pie: {
                    // Round the corners of every slice (px)
                    borderRadius: 12,
                    // Leave a gap between adjacent slices (px)
                    spacing: 5,
                    donut: {
                        size: '60%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Total Consumido',
                                formatter: function () {
                                    return usedPercentageFinal + "%"
                                }
                            },
                        },
                    },
                },
            },
            stroke: {
                width: 0,
            },
            dataLabels: {
                enabled: true,
                position: 'inside',
                dropShadow: {
                    enabled: false
                }
            },
            legend: {
                position: 'bottom',
            },
            title: {
                text: 'Consumo de Orçamento',
                align: 'center',
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 320,
                        },
                    },
                },
            ],
        }

    } catch (error) {
        
        console.log(`Erro: ${error}`)

    }

    let chartElement = document.querySelector("#chart")
    let chart = new ApexCharts(document.querySelector('#chart'), options)
    console.log(chartElement)

    if (chartElement == null) {

        console.log("tava vazio")
        chart.render()


    } else {

        chartElement.innerHTML = ''
        chart.render() 
    }


}
