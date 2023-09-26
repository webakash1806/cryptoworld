import React, { useEffect, useState } from 'react'
import { singleExchange } from './useApiEndpoints'
import axios from 'axios'

const useSingleExchange = () => {

    const [exchangeData, setExchangeData] = useState({
        isLoading: false,
        id: 'binance',
        singleExchange: []
    })

    const fetchExchange = async () => {
        setExchangeData({ ...exchangeData, isLoading: true })
        let id = exchangeData.id
        const exchangeAPIEndpoint = singleExchange(id)
        const response = await axios.get(exchangeAPIEndpoint)
        console.log(response)
        setExchangeData({ ...exchangeData, isLoading: false, singleExchange: response })

    }

    useEffect(() => {
        fetchExchange()
    }, [exchangeData.id])

    return [exchangeData, setExchangeData]
}

export default useSingleExchange
