import React from 'react'
import ListContextData from './Context/ListContextProvider'
import CoinList from './Components/CoinList/CoinList'
import ExchangeList from './Components/ExchangeList/ExchangeList'
import { Routes, Route } from 'react-router-dom'
import ListHeader from './Components/Header/ListHeader/ListHeader'

const App = () => {
  return (
    <ListContextData>

      <Routes>

        <Route path="/cryptoworld" element={<ListHeader />} />
        <Route path="/cryptoworld/exchange" element={<ExchangeList />} />
        <Route path="/cryptoworld/coin" element={<CoinList />} />

      </Routes>

    </ListContextData>
  )
}

export default App
