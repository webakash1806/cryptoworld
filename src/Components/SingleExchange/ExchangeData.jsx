import React from 'react'
import Header from '../Header/MainHeader/Header'
import { useParams } from 'react-router-dom'

const ExchangeData = () => {
    const { id } = useParams()
    return (
        <div>
            <Header />
            <div className='pt-12'>{id} data coming soon...</div>
        </div>
    )
}

export default ExchangeData
