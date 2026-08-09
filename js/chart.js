var options = {
    series: [60, 30],
    chart: {
        type: 'donut',
        width: 400,
    },
    labels: [
        'Consumido',
        'Valor da Compra',
    ],
    colors: ['#0EA5E9', '#14B8A6', '#F59E0B', '#F43F5E'],
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
                    },
                },
            },
        },
    },
    stroke: {
        width: 0,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        position: 'bottom',
    },
    title: {
        text: 'Orders by sales team',
        align: 'left',
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

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
