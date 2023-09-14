import React from 'react'
import CoinContextData from './Context/CoinContextProvider'
import CoinList from './Components/CoinList/CoinList'

const App = () => {
  return (
    <CoinContextData>
      Hello
      <CoinList />
      {/* mainlink : "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1" */}
      {/* graph link : "https://www.coingecko.com/coins/{id}/sparkline.svg" */}
    </CoinContextData>
  )
}

export default App
