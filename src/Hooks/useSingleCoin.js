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
        const decimalPlace = { maximumFractionDigits: 2 }

        try {
            if (singleCoin.id === '') {
                setSingleCoin({ ...singleCoin, isLoading: true })
            }
            else {
                const response = await axios.get(singleCoinEndpoint)
                const singleCoinDetail = {
                    data: response.data,
                    image: response.data.image.large,
                    name: response.data.name,
                    rank: response.data.market_cap_rank,
                    desc: response.data.description.en,
                    price: response.data.market_data.current_price.inr,
                    symbol: response.data.symbol,
                    marketCap: response.data.market_data.market_cap.inr,
                    vol: response.data.market_data.total_volume.inr,
                    high24: response.data.market_data.high_24h.inr,
                    low24: response.data.market_data.low_24h.inr,
                    per24: response.data.market_data.price_change_percentage_24h_in_currency.inr === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(response.data.market_data.price_change_percentage_24h_in_currency.inr)}`,
                    per1yr: response.data.market_data.price_change_percentage_1y_in_currency.inr === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(response.data.market_data.price_change_percentage_1y_in_currency.inr)}`,
                    per7: response.data.market_data.price_change_percentage_7d_in_currency.inr === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(response.data.market_data.price_change_percentage_7d_in_currency.inr)}`,
                    per14: response.data.market_data.price_change_percentage_14d_in_currency.inr === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(response.data.market_data.price_change_percentage_14d_in_currency.inr)}`,
                    per30: response.data.market_data.price_change_percentage_30d_in_currency.inr === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(response.data.market_data.price_change_percentage_30d_in_currency.inr)}`,
                    per60: response.data.market_data.price_change_percentage_60d_in_currency.inr === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(response.data.market_data.price_change_percentage_60d_in_currency.inr)}`,
                }
                setSingleCoin({ ...singleCoin, isLoading: false, singleData: singleCoinDetail })
            }
        } catch (error) {
            if (singleCoin.id === '') {
                setSingleCoin({ ...singleCoin, isLoading: true })
            }
            else if (error) {
                const networkErr = error.code === "ERR_NETWORK"
                if (networkErr === true) {
                    // console.log(networkErr)
                    alert("No internet")
                }
            }
        }
    }




    useEffect(() => {
        fetchSingleCoin()
    }, [singleCoin.id])

    return [singleCoin, setSingleCoin]
}

export default useSingleCoin