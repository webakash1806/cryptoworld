import React from 'react'
import ListContextData from './Context/ListContextProvider'
import CoinList from './Components/CoinList/CoinList'
import ExchangeList from './Components/ExchangeList/ExchangeList'

const App = () => {
  return (
    <ListContextData>
      Hello
      <ExchangeList />
      <CoinList />
      {/* mainlink : "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1" */}
      {/* graph link : "https://www.coingecko.com/coins/{id}/sparkline.svg" */}
    </ListContextData>
  )
}

export default App
