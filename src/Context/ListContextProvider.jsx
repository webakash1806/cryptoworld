import { useEffect, useState } from "react";
import ListContext from "./ListContext";
import axios from 'axios'

const ListContextProvider = ({ children }) => {

    const [list, setList] = useState({
        page: 1,
        coinList: [],
    })

    const [excList, setExcList] = useState({
        excPage: 1,
        exchangeList: []
    })

    const fetchCoin = async () => {
        const coinEndpoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=${list.page}`
        const response = await axios.get(coinEndpoint);
        const coinDetail = response.data
        setList({ ...list, coinList: coinDetail });
    };

    const fetchExchange = async () => {
        const exchangeEndpoint = `https://api.coingecko.com/api/v3/exchanges?per_page=100&page=${excList.excPage}`
        const exchangeResponse = await axios.get(exchangeEndpoint)
        const exchangeDetail = exchangeResponse.data
        setExcList({ ...excList, exchangeList: exchangeDetail })
    }


    useEffect(() => {
        fetchExchange()
        fetchCoin()
    }, [list.page, excList.excPage]);

    return (
        <ListContext.Provider value={{ list, setList, excList, setExcList }}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContextProvider