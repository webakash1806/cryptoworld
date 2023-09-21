import { useEffect, useState } from "react";
import ListContext from "./ListContext";
import axios from 'axios'
import { CoinDataAPI, ExchangeDataAPI, } from "../Hooks/useApiEndpoints";

const ListContextProvider = ({ children }) => {

    const [list, setList] = useState({
        page: 1,
        coinList: [],
        isLoading: false
    })

    const [excList, setExcList] = useState({
        excPage: 1,
        exchangeList: [],
        isLoading: false
    })



    const fetchCoin = async () => {
        setList({ ...list, isLoading: true })
        const coinPageCount = list.page
        const coinEndpoint = CoinDataAPI(coinPageCount)
        const response = await axios.get(coinEndpoint);
        const coinDetail = response.data
        setList({ ...list, coinList: coinDetail, isLoading: false });
    };

    const fetchExchange = async () => {
        setExcList({ ...excList, isLoading: true })
        const exchangePageCount = excList.excPage
        const exchangeEndpoint = ExchangeDataAPI(exchangePageCount)
        const exchangeResponse = await axios.get(exchangeEndpoint)
        const exchangeDetail = exchangeResponse.data
        setExcList({ ...excList, exchangeList: exchangeDetail, isLoading: false })
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