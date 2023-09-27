import React, { useEffect, useState } from 'react'
import { singleExchange } from './useApiEndpoints'
import axios from 'axios'

const useSingleExchange = () => {

    const [exchangeData, setExchangeData] = useState({
        isLoading: false,
        id: '',
        singleExchange: []
    })

    const fetchExchange = async () => {
        setExchangeData({ ...exchangeData, isLoading: true })
        let id = exchangeData.id
        const exchangeAPIEndpoint = singleExchange(id)

        if (exchangeData.id === '') {
            setExchangeData({ ...exchangeData, isLoading: true })
        }
        else {
            const response = await axios.get(exchangeAPIEndpoint)
            const data = response.data
            const singleData = {
                fullData: data,
                rank: data.trust_score_rank === null ? "---" : data.trust_score_rank,
                name: data.name,
                image: data.image,
                cent: data.centralized,
                country: data.country === null ? "No Data" : data.country,
                score: data.trust_score === null ? "No Data" : data.trust_score,
                year: data.year_established === null ? "No Data" : data.year_established,
                vol24: data.trade_volume_24h_btc,
                vol24nor: data.trade_volume_24h_btc_normalized
            }
            setExchangeData({ ...exchangeData, isLoading: false, singleExchange: singleData })
        }


    }

    useEffect(() => {
        fetchExchange()
    }, [exchangeData.id])

    return [exchangeData, setExchangeData]
}

export default useSingleExchange
