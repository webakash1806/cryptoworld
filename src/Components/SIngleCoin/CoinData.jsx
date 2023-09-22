import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/MainHeader/Header'
import CoinChart from '../CoinChart/CoinChart'
import CoinConverterCard from './SingleCoinCards/CoinConverterCard'
import useSingleCoin from '../../Hooks/useSingleCoin'
import CoinDataCard from './SingleCoinCards/CoinDataCard'

const CoinData = () => {
    const [singleCoin, setSingleCoin] = useSingleCoin()

    console.log(singleCoin)

    const { image, rank, desc, name, price, symbol, marketCap, vol, high24, low24, per24, per1yr, per7, per30, per14 } = singleCoin.singleData

    const { id } = useParams()



    // console.log(singleCoin.singleData.desc)

    useEffect(() => {
        setSingleCoin({ ...singleCoin, id: id })
    }, [id])

    // console.log(id)
    return (
        <div>
            <Header />
            <div className='mt-12'>
                {id} Data is coming soon
                <CoinDataCard id={id} rank={rank} name={name} symbol={symbol} img={image} price={price} high24={high24} low24={low24} per24={per24} marketCap={marketCap} vol={vol} />
                <CoinConverterCard symbol={symbol} price={price} />
                <div>
                    {/* <CoinChart id={id} /> */}
                </div>
            </div>

        </div>
    )
}

export default CoinData
