import { useState, useEffect } from "react"
import { coinSparkLine } from "./useApiEndpoints"
import axios from "axios"

const useCoinChart = () => {
    const [coinChart, setCoinChart] = useState({
        days: '1',
        coinChartData: [],
        isLoading: false,
        coinID: ''
    })

    const fetchCoinChart = async () => {
        setCoinChart({ ...coinChart, isLoading: true })
        const days = coinChart.days
        const id = coinChart.coinID
        const coinChartEndpoint = coinSparkLine(id, days)
        if (coinChart.coinID === '') {
            setCoinChart({ ...coinChart, isLoading: true })
        }
        else {
            const response = await axios.get(coinChartEndpoint)
            const coinChartDetail = response.data.prices
            setCoinChart({ ...coinChart, isLoading: false, coinChartData: coinChartDetail })

        }
    }

    useEffect(() => {
        fetchCoinChart()
    }, [coinChart.days, coinChart.coinID])

    return [coinChart, setCoinChart]
}

export default useCoinChart