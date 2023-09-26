import React from 'react'
import Header from '../Header/MainHeader/Header'
import ExchangeChart from './ExchangeChart/ExchangeChart'
import useSingleExchange from '../../Hooks/useSingleExchange'
import LeftSectionContainer from './SingleExchangeContainer/LeftSectionContainer'
import { useParams } from 'react-router-dom'

const ExchangeData = () => {
    const { id } = useParams()

    const [exchangeData, setExchangeData] = useSingleExchange()

    console.log(exchangeData)

    return (
        <div>
            <Header />
            <div className='pt-12'>{id} data coming soon...</div>
            <LeftSectionContainer />
            <ExchangeChart id={id} />
        </div>
    )
}

export default ExchangeData
