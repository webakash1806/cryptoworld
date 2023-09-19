import React, { useEffect, useState } from 'react'
import { TrendingDataAPI } from './useApiEndpoints'
import axios from 'axios'

const useTrendingData = () => {

    const [trendingList, setTrendingList] = useState([])
    const trendingData = async () => {
        const trendingEndoint = TrendingDataAPI()
        const response = await axios.get(trendingEndoint)
        const data = response.data
        setTrendingList(data)
    }

    useEffect(() => {
        trendingData()
    }, [])

    return [trendingList, setTrendingList]
}

export default useTrendingData
