import React from 'react'
import ListContextData from './Context/ListContextProvider'
import ExchangeList from './Components/ExchangeList/ExchangeList'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Homepage/Home'
import About from './Components/About/About'
import FAQpage from './Components/FAQPage/FAQpage'
import ContactPage from './Components/ContactPage/ContactPage'
import ProjectPage from './Components/ProjectPage/ProjectPage'

const App = () => {
  return (
    <ListContextData>

      <Routes>

        <Route path="/cryptoworld" element={<Home />} />
        <Route path="/cryptoworld/exchange" element={<ExchangeList />} />
        <Route path="/cryptoworld/about" element={<About />} />
        <Route path="/cryptoworld/FAQ" element={<FAQpage />} />
        <Route path="/cryptoworld/contact" element={<ContactPage />} />
        <Route path="/cryptoworld/projects" element={<ProjectPage />} />
      </Routes>

    </ListContextData>
  )
}

export default App
