import { useEffect, useState } from "react";
import ListContext from "./ListContext";
import axios from 'axios'

const ListContextProvider = ({ children }) => {

    const [list, setList] = useState({
        coinActive: false,
        excActive: false,
        coinList: [],
        exchangeList: []
    })

    const fetchCoin = async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1');
        const coinDetail = response.data
        setList({ ...list, coinList: coinDetail });
    };

    const fetchExchange = async () => {
        const exchangeResponse = await axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1')
        const exchangeDetail = exchangeResponse.data
        setList({ ...list, exchangeList: exchangeDetail })
    }


    useEffect(() => {
        // fetchCoin(); // Call the async function here
        if (list.excActive === true) {
            fetchExchange()

        }
        else {
            // setList({ ...list, excActive: false })
            fetchCoin()
            // setList({ ...list, excActive: false })
        }


    }, [list.excActive, list.coinActive]);

    return (
        <ListContext.Provider value={{ list, setList }}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContextProvider