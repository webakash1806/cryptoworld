import { useEffect } from "react"
import useCoinChart from "../../Hooks/useCoinChart"

const CoinChartDays = ({ duration, time }) => {

    const [coinChart, setCoinChart] = useCoinChart()

    console.log(coinChart)
    console.log(coinChart.days)

    const updateDays = () => {
        setCoinChart({ ...coinChart, days: duration })
    }

    useEffect(() => {
        updateDays()
    }, [setCoinChart])

    return (
        <div key={duration} className='border p-[0.5px] text-center w-[4.5rem] cursor-pointer'
            onClick={updateDays}

        > {time}

        </ div>
    )
}

export default CoinChartDays
