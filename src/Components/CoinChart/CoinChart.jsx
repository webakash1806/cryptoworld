import React, { useEffect } from 'react'
import useCoinChart from '../../Hooks/useCoinChart'
import useChartDays from '../../Hooks/useChartDays'
import Loading from '../Loading/Loading'
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
    }, [coinChart.days])


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
            pointBorderColor: 'red',
            tensiom: 5,
            backgroundColor: '#0f8d0447',
            fill: true,
            color: 'white'
            // yAxisID: 'y'
        }]
    }

    return (
        <div className='dark:bg-darkBg dark:text-white border w-[100vw]  sm:w-[35rem] md:[37rem] lg:w-[36rem] h-fit'>
            {id}

            <div className='flex '>  {useChartDays.map((val) =>
                <div key={val.duration} className='border p-[0.5px] text-center w-[4.5rem]' onClick={() => setCoinChart({ ...coinChart, days: val.duration })}> {val.time}</ div>
            )
            }</div >

            <div className='flex items-center justify-center w-[100vw]  sm:w-[35rem] md:[37rem] lg:w-[36rem] min-h-[10rem] h-fit'>
                {coinChart.isLoading === true ? <Loading /> :
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
                                        color: 'grey',
                                        z: 1,
                                        stepSize: 100,
                                        minTicksLimit: 5,
                                        maxTicksLimit: 8,
                                    },

                                    border: {
                                        color: 'black'
                                    }
                                },
                                x: {
                                    ticks: {
                                        minTicksLimit: 2,
                                        maxTicksLimit: 6,
                                    },
                                    grid: {
                                        display: false
                                    }
                                },
                            },
                            elements: {
                                point: {
                                    radius: 0.5,
                                },
                            },

                        }} />
                }
            </div>
        </div >
    )
}

export default CoinChart
