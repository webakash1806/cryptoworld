import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/MainHeader/Header'
import CoinChart from '../CoinChart/CoinChart'
import CoinConverterCard from './SingleCoinCards/CoinConverterCard'
import useSingleCoin from '../../Hooks/useSingleCoin'
import CoinDataCard from './SingleCoinCards/CoinDataCard'
import CoinPerCard from './SingleCoinCards/CoinPerCard'

const CoinData = () => {
    const [singleCoin, setSingleCoin] = useSingleCoin()
    // console.log(singleCoin)
    const { image, rank, desc, name, price, symbol, marketCap, vol, high24, low24, per24, per1yr, per7, per30, per60, per14 } = singleCoin.singleData

    const { id } = useParams()

    useEffect(() => {
        setSingleCoin({ ...singleCoin, id: id })
    }, [id])

    return (
        <div>
            <Header />
            <div className='pt-16 dark:bg-darkBg dark:text-white w-screen flex flex-col items-center'>
                {id} Data is under development....
                <CoinDataCard id={id} rank={rank} name={name} symbol={symbol} img={image} price={price} high24={high24} low24={low24} per24={per24} marketCap={marketCap} vol={vol} />
                <CoinConverterCard symbol={symbol} price={price} />
                <div>
                    <CoinChart id={id} per24={per24} per1yr={per1yr} per7={per7} per30={per30} per14={per14} per60={per60} />
                    <CoinPerCard per24={per24} per1yr={per1yr} per7={per7} per30={per30} per14={per14} per60={per60} />
                </div>
            </div>

        </div>
    )
}

export default CoinData
