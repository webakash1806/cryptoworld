import React, { useEffect } from 'react'
import useExchangeChart from '../../Hooks/useExchangeChart'
import Loading from '../Loading/Loading';
import SelectedDay from '../SelectedDay/SelectedDay';
import useExchangeDays from '../../Hooks/useExchangeDays'
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

const ExchangeChart = ({ id, name }) => {

    const [chartData, setChartData] = useExchangeChart()

    useEffect(() => {
        setChartData({ ...chartData, id: id, days: '1' })

    }, [setChartData])


    const labels = chartData.exchangeChartData.map((exch) => {
        let date = new Date(exch[0])
        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()}PM` :
            `${date.getHours()}:${date.getMinutes()}AM`
        return chartData.days === '1' ? time : date.toLocaleDateString()
    })

    const data = {
        labels: labels,
        datasets: [{
            label: `${name} Chart in BTC`,
            data: chartData.exchangeChartData.map((exchData) => exchData[1]),
            borderColor: '#A22EFF',
            borderWidth: 2,
            tension: 0.1,
            backgroundColor: '#a12eff41',
            fill: true,
            color: 'white'
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: 1 / 2,
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
                    maxTicksLimit: 5,
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

    console.log(data)

    return (
        <div className=' flex flex-col gap-4 items-center dark:bg-darkBg dark:text-white w-[100vw]  sm:w-[35rem] md:w-[35rem] xmd:w-[57vw] lg:w-[40rem] h-fit lg:h-[30rem]'>
            <p className='font-semibold text-[18.5px]'>{name} chart</p>
            <div className='flex items-center justify-center w-fit p-[5.5px_8px] rounded-md dark:bg-[#2c2c2c] dark:shadow-[inset_0px_0px_5px_#191820] shadow-[inset_0px_0px_5px_#abaaac7c] bg-[#ececec6a]'>  {useExchangeDays.map((val) =>
                <SelectedDay key={val.duration} onClick={() => setChartData({ ...chartData, days: val.duration })} clicked={val.duration === chartData.days}> {val.time}</ SelectedDay>
            )
            }</div >

            <div className='flex pr-1 md:pr-2 xmd:pr-4 items-center justify-center w-[100vw] min-h-[20rem] xs:min-w-[27rem] xs:max-w-[35rem] xs:min-h-[26rem] sm:min-w-[20rem] sm:max-w-[36rem] xmd:w-[60vw] xmd:min-h-[23.7rem] lg:w-[40rem] xl:w-[45rem]'>
                {chartData.isLoading === true ? <Loading /> :
                    <Line className=''
                        data={data}
                        options={options} />
                }
            </div>
        </div>
    )
}

export default ExchangeChart
