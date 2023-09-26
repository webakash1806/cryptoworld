import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { exchangeSparkline } from './useApiEndpoints'

const useExchangeChart = () => {

    const [chartData, setChartData] = useState({
        exchangeChartData: '',
        isLoading: false,
        days: '1',
        id: ''
    })

    const fetchChart = async () => {
        setChartData({ ...chartData, isLoading: true })
        const days = chartData.days
        const exchangeId = chartData.id
        const exchangeChartEndpoint = exchangeSparkline(exchangeId, days)
        if (exchangeId === '') {
            setChartData({ ...chartData, isLoading: true })
        }
        else {
            const response = await axios.get(exchangeChartEndpoint)
            console.log(response)
            setChartData({ ...chartData, isLoading: false, exchangeChartData: response })
        }
    }

    useEffect(() => {
        fetchChart()
    }, [chartData.days, chartData.id])

    return [chartData, setChartData]
}

export default useExchangeChart
