import React from 'react'
import ListContextData from './Context/ListContextProvider'
import CoinList from './Components/CoinList/CoinList'
import ExchangeList from './Components/ExchangeList/ExchangeList'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/MainHeader/Header'

const App = () => {
  return (
    <ListContextData>

      <Routes>

        <Route path="/cryptoworld" element={<Header />} />
        <Route path="/cryptoworld/exchange" element={<ExchangeList />} />
        <Route path="/cryptoworld/coin" element={<CoinList />} />

      </Routes>

    </ListContextData>
  )
}

export default App
