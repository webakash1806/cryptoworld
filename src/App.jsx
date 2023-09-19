import React from 'react'
import ListContextData from './Context/ListContextProvider'
import ExchangeList from './Components/ExchangeList/ExchangeList'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <ListContextData>

      <Routes>

        <Route path="/cryptoworld" element={<Home />} />
        <Route path="/cryptoworld/exchange" element={<ExchangeList />} />

      </Routes>

    </ListContextData>
  )
}

export default App
