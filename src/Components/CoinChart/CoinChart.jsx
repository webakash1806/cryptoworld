import React, { useEffect, useState } from 'react'
import useCoinChart from '../../Hooks/useCoinChart'
import useChartDays from '../../Hooks/useChartDays'
import Loading from '../Loading/Loading'
import { Chart, Interaction } from 'chart.js';
import { CrosshairPlugin, Interpolate } from 'chartjs-plugin-crosshair';
Chart.register(CrosshairPlugin);
Interaction.modes.interpolate = Interpolate
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

const CoinChart = (props) => {

    const { id, name, per24, per1yr, per7, per14, per30, per60 } = props
    const [coinChart, setCoinChart] = useCoinChart()
    const [err, setErr] = useState(per24)

    useEffect(() => {
        setCoinChart({ ...coinChart, coinID: id })
        if (coinChart.days === '7') {
            setErr(per7)
        }
        else if (coinChart.days === '14') {
            setErr(per14)
        }
        else if (coinChart.days === '30') {
            setErr(per30)
        }
        else if (coinChart.days === '60') {
            setErr(per60)
        }
        else if (coinChart.days === '365') {
            setErr(per1yr)
        }
        else if (coinChart.days === '1') {
            setErr(per24)
        }

    }, [coinChart.days, per24, per1yr, per7, per14, per30, per60, setErr])

    const labels = coinChart.coinChartData.map((coin) => {
        let date = new Date(coin[0])
        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()}PM` :
            `${date.getHours()}:${date.getMinutes()}AM`
        return coinChart.days === '1' ? time : date.toLocaleDateString()
    })

    const data = {
        labels: labels,
        datasets: [{
            label: `${id} chart`,
            data: coinChart.coinChartData.map((coin) => coin[1]),
            borderColor: err < 0 ? '#DC2626' : '#10B981',
            borderWidth: 2,
            tension: 0.1,
            backgroundColor: err < 0 ? '#ff000053' : '#1eb50058',
            fill: true,
            color: 'white'
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 3 / 2,
        plugins: {
            legend: true,
            tooltip: {
                mode: 'interpolate',
                intersect: false
            },
            crosshair: {
                line: {
                    color: '#808080',
                    width: 0.5
                },
            }
        },
        scales: {
            y: {
                offset: true,
                grace: '10%',
                ticks: {
                    mirror: 'true',
                    color: '#808080',
                    z: 1,
                    stepSize: 0.01,
                    minTicksLimit: 5,
                    maxTicksLimit: 8,
                },
                border: {
                    color: '#808080'
                }
            },
            x: {
                offset: true,
                ticks: {
                    color: '#808080',
                    display: true,
                    minTicksLimit: 2,
                    maxTicksLimit: 6,
                },
                grid: {
                    display: false
                },
                border: {
                    color: '#808080'
                }
            },
        },
        elements: {
            point: {
                radius: 0.5,
            },
        },
    }

    return (
        <div className='flex flex-col gap-4 items-center dark:bg-darkBg dark:text-white w-[100vw]  sm:w-[35rem] md:w-[35rem] xmd:w-[57vw] lg:w-[40rem] h-fit lg:h-[30rem]'>

            <p><span className='uppercase font-semibold text-[18px]'>{name}</span> Price Chart </p>

            <div className='flex border-2 p-[0px_0px]  rounded-md border-grey '>  {useChartDays.map((val) =>
                <div key={val.duration} className='border border-grey p-[5px_10px] text-center w-fit xs:p-[3.5px_20px] cursor-pointer' onClick={() => setCoinChart({ ...coinChart, days: val.duration })}> {val.time}</ div>
            )
            }</div >

            <div className='flex pr-1 md:pr-2 xmd:pr-4 items-center justify-center w-[100vw]  sm:w-[35rem] md:w-[34rem] xmd:w-[57vw] lg:w-[40rem] min-h-[15rem] h-fit'>
                {coinChart.isLoading === true ? <Loading /> :
                    <Line className=''
                        data={data}
                        options={options} />
                }
            </div>
        </div >
    )
}

export default CoinChart
