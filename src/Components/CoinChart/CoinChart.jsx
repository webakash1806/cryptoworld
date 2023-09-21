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
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
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
            tensiom: 0.02,
        }]
    }
    return (
        <div className='min-w-[19rem] max-w-[50rem]'>
            coinChart{id}
            <Line data={data}
                options={{
                    responsive: true,
                    plugins: {
                        legend: true,
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
