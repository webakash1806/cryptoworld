import React, { useEffect } from 'react'
import Header from '../Header/MainHeader/Header'
import ExchangeChart from './ExchangeChart/ExchangeChart'
import useSingleExchange from '../../Hooks/useSingleExchange'
import LeftSectionContainer from './SingleExchangeContainer/LeftSectionContainer'
import useSingleCoin from '../../Hooks/useSingleCoin'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

const ExchangeData = () => {
    const { id } = useParams()

    const [exchangeData, setExchangeData] = useSingleExchange()
    const [singleCoin, setSingleCoin] = useSingleCoin()

    const btcPrice = singleCoin.singleData.price

    const { cent, country, image, name, rank, score, vol24, vol24nor, year } = exchangeData.singleExchange

    console.log(score)

    useEffect(() => {
        setExchangeData({ ...exchangeData, id: id })
        setSingleCoin({ ...singleCoin, id: 'bitcoin' })
    }, [setExchangeData, setSingleCoin])

    console.log(exchangeData)

    return (
        <div className=' dark:bg-darkBg w-screen overflow-hidden dark:text-white items-center justify-center min-h-screen'>
            <Header />
            {exchangeData.isLoading === true || score === undefined ? <div className='w-full h-screen flex items-center justify-center'>
                <Loading /></div> : <>
                <div className='pt-16 lg:pt-24 dark:bg-darkBg dark:text-white border-b-2 pb-10  border-[#d9d8d8bf]  flex flex-col items-center  justify-center gap-4 xmd:flex-row'>
                    <div className=' xmd:border-r-2 xmd:border-[#d9d8d8bf] dark:xmd:border-[#1F2123] w-[100%] min-[18rem] xs:p-[2px_30px] sm:p-[2px_7rem] md:p-[2px_9rem] xmd:p-[2px_2px] xmd:w-[40%] lg:w-[30%]'>
                        <LeftSectionContainer cent={cent} rank={rank} name={name} country={country} image={image} score={score} year={year} vol24
                            ={vol24 * btcPrice} vol24nor={vol24nor * btcPrice} />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <ExchangeChart id={id} name={name} />
                    </div>
                </div>
            </>}
        </div>
    )
}

export default ExchangeData
