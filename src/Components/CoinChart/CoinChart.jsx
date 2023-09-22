import React, { useEffect } from 'react'
import useCoinChart from '../../Hooks/useCoinChart'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
)

const CoinChart = ({ id }) => {

    const [coinChart, setCoinChart] = useCoinChart()

    useEffect(() => {
        setCoinChart({ ...coinChart, coinID: id })
    }, [])

    console.log(coinChart)

    const labels = coinChart.coinChartData.map((coin) => {
        let date = new Date(coin[0])
        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()}PM` :
            `${date.getHours()}:${date.getMinutes()}AM`
        return (coinChart.days === 1) ? time : date.toLocaleDateString()
    })

    const data = {
        labels: labels,
        datasets: [{
            label: `${id} chart`,
            data: coinChart.coinChartData.map((coin) => coin[1]),

            borderColor: 'red',
            borderWidth: 1,
            pointBorderColor: 'black',
            tensiom: 0.01,
            backgroundColor: 'transparent',
            fill: true,
            // yAxisID: 'y'
        }]
    }
    return (
        <div className=' border w-[100vw]  sm:w-[35rem] lg:w-[40rem] h-[23rem] md:h-[25rem]'>
            coinChart{id}
            <Line className=''
                data={data}
                options={{

                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 3 / 2,
                    plugins: {
                        legend: true,

                    },
                    scales: {
                        y: {
                            grace: '10%',
                            ticks: {
                                mirror: 'true',
                                color: 'red',
                                showLabelBackdrop: 'true',
                                z: 1,
                                stepSize: 100,
                                minTicksLimit: 5,
                                maxTicksLimit: 8

                            },
                            grid: {
                                drawTicks: false
                            },

                            border: {
                                color: 'black'
                            }
                        },
                        x: {
                            ticks: {
                                // padding: 10,
                                minTicksLimit: 2,
                                maxTicksLimit: 7
                            },


                        },
                    },
                    elements: {
                        point: {
                            radius: 0.5,
                        },
                    },

                }} />
        </div>
    )
}

export default CoinChart
