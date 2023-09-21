import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/MainHeader/Header'


const CoinData = () => {
    const { id } = useParams()
    // console.log(id)
    return (
        <div>
            <Header />
            <div className='mt-12'>
                {id} Data is coming soon

            </div>

        </div>
    )
}

export default CoinData
