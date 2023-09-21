import React, { useEffect, useState } from 'react'
import { TrendingDataAPI } from './useApiEndpoints'
import axios from 'axios'

const useTrendingData = () => {

    const [trendingList, setTrendingList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const trendingData = async () => {
        setIsLoading(true)
        const trendingEndoint = TrendingDataAPI()
        const response = await axios.get(trendingEndoint)
        const data = response.data
        setTrendingList(data)
        setIsLoading(false)
    }

    useEffect(() => {
        trendingData()
    }, [])

    return [trendingList, setTrendingList, isLoading]
}

export default useTrendingData
