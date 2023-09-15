import React from 'react'
import ListContextData from './Context/ListContextProvider'
import CoinList from './Components/CoinList/CoinList'
import ExchangeList from './Components/ExchangeList/ExchangeList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <ListContextData>

      <BrowserRouter>

        <Routes>
          Hello

          <Route path="/CryptoWorld" element={<Header />} />
          <Route path="/CryptoWorld/exchange" element={<ExchangeList />} />
          <Route path="/CryptoWorld/coin" element={<CoinList />} />

          {/* mainlink : "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1" */}
          {/* graph link : "https://www.coingecko.com/coins/{id}/sparkline.svg" */}
        </Routes>
      </BrowserRouter>

    </ListContextData>
  )
}

export default App
