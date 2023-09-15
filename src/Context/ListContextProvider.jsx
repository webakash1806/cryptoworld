import { useEffect, useState } from "react";
import ListContext from "./ListContext";
import axios from 'axios'

const ListContextProvider = ({ children }) => {

    const [list, setList] = useState({
        coinList: [],
        exchangeList: []
    })

    const fetchCoin = async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1');
        const coinDetail = response.data
        setList({ ...list, coinList: coinDetail });
    };

    const fetchExchange = async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1')
        const exchangeDetail = response.data
        setList({ ...list, exchangeList: exchangeDetail })
    }

    useEffect(() => {
        fetchCoin(); // Call the async function here
        fetchExchange()
    }, []);

    return (
        <ListContext.Provider value={{ list, setList }}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContextProvider