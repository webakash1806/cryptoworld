import { useEffect, useState } from "react";
import CoinContext from "./CoinContext";
import axios from 'axios'

const CoinContextData = ({ children }) => {

    const [coin, setCoin] = useState({
        coinList: []
    })

    const fetchData = async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1');

        const coinDetail = response.data
        setCoin({ ...coin, coinList: coinDetail });
    };


    useEffect(() => {

        fetchData(); // Call the async function here
    }, []);

    return (
        <CoinContext.Provider value={{ coin, setCoin }}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextData