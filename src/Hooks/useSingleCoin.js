import { useState, useEffect } from "react"
import { singleCoinData } from "./useApiEndpoints"
import axios from "axios"

const useSingleCoin = () => {


    const [singleCoin, setSingleCoin] = useState({
        singleData: [],
        isLoading: false,
        id: '',
    })

    const fetchSingleCoin = async () => {
        setSingleCoin({ ...singleCoin, isLoading: true })
        const id = singleCoin.id
        const singleCoinEndpoint = singleCoinData(id)
        if (singleCoin.id === '') {
            setSingleCoin({ ...singleCoin, isLoading: true })
        }
        else {
            const response = await axios.get(singleCoinEndpoint)
            const singleCoinDetail = {
                // data: response.data,
                image: response.data.image.large,
                rank: response.data.market_cap_rank,
                desc: response.data.description.en,
                price: response.data.market_data.current_price.inr,
                symbol: response.data.symbol,
                marketCap: response.data.market_data.market_cap.inr,
                vol: response.data.market_data.total_volume.inr,
                high24: response.data.market_data.high_24h.inr,
                low24: response.data.market_data.low_24h.inr,
                per24: response.data.market_data.price_change_percentage_24h_in_currency.inr,
                per1yr: response.data.market_data.price_change_percentage_1y_in_currency.inr,
                per7: response.data.market_data.price_change_percentage_7d_in_currency.inr,
                per30: response.data.market_data.price_change_percentage_30d_in_currency.inr,
                per14: response.data.market_data.price_change_percentage_14d_in_currency.inr,
            }
            setSingleCoin({ ...singleCoin, isLoading: false, singleData: singleCoinDetail })
        }
    }




    useEffect(() => {
        fetchSingleCoin()
    }, [singleCoin.id])

    return [singleCoin, setSingleCoin]
}

export default useSingleCoin