import { useState } from 'react'
import useSingleCoin from '../../Hooks/useSingleCoin'


const useChartDaysPercentage = () => {
    const [singleCoin, setSingleCoin] = useSingleCoin()
    const [daysPer, setDaysPer] = useState()

    const { per24, per1yr, per7, per30, per60, per14 } = singleCoin.singleData


    setDaysPer([{

    }])

    return
}

export default useChartDaysPercentage
