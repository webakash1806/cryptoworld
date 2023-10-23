import React from 'react'
import ListContextData from './Context/ListContextProvider'
import ExchangeList from './Pages/ExchangeList/ExchangeList'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import FAQpage from './Pages/FAQpage'
import ContactPage from './Pages/ContactPage'
import ProjectPage from './Pages/ProjectPage'
import CoinData from './Pages/CoinData'
import ExchangeData from './Pages/ExchangeData'
import Auth from './Pages/SignUp/Auth'

const App = () => {
  return (
    <ListContextData>

      <Routes>

        <Route exact path="/cryptoworld" element={<Home />} />
        <Route path="/cryptoworld/exchange" element={<ExchangeList />} />
        <Route path="/cryptoworld/about" element={<About />} />
        <Route path="/cryptoworld/FAQ" element={<FAQpage />} />
        <Route path="/cryptoworld/contact" element={<ContactPage />} />
        <Route path="/cryptoworld/projects" element={<ProjectPage />} />
        <Route exact path="/cryptoworld/coin/:id" element={<CoinData />} />
        <Route path="/cryptoworld/exchange/:id" element={<ExchangeData />} />
        <Route path="/cryptoworld/signUp_Login" element={<Auth />} />
      </Routes>

    </ListContextData>
  )
}

export default App
