import React, { useEffect } from 'react'
import Header from '../Header/MainHeader/Header'
import ExchangeChart from './ExchangeChart/ExchangeChart'
import useSingleExchange from '../../Hooks/useSingleExchange'
import LeftSectionContainer from './SingleExchangeContainer/LeftSectionContainer'
import useSingleCoin from '../../Hooks/useSingleCoin'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import TickersList from './ExchangeTickersList.jsx/TickersList'

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
                <div className="flex flex-col min-w-[19rem] max-w-[9.5rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-full lg:overflow-visible overflow-x-scroll">
                    <div className="flex lg:sticky top-0 bg-white dark:bg-darkBg lg:gap-3 font-bold text-[14px] sm:text-[17x] capitalize border-t-[1px] border-b-[1px] border-[#b5b5b580] dark:border-[#6f6f6fab] pt-4 pb-4 w-fit">
                        <p className="min-w-[2rem]  md:min-w-[5rem] text-center ">#</p>
                        <p className='min-w-[10rem]  md:min-w-[11rem] text-left pl-1'>Pair</p>
                        <p className='min-w-[7.5rem]  md:min-w-[9rem] text-right '>Price</p>
                        <p className='min-w-[6rem]  md:min-w-[7rem] text-center '>Spread</p>
                        <p className='min-w-[12rem]  md:min-w-[14rem] text-right pr-2 '>Volume</p>
                        <p className='min-w-[5rem]  md:min-w-[5.5rem] text-center '>Score</p>
                    </div>
                    <div>
                        {exchangeData.tickers.map((val, ind) => <TickersList key={val.volume} rank={ind + 1} score={val.trust_score} volume={val.converted_volume.btc * btcPrice} price={val.converted_last.btc * btcPrice} spread={val.bid_ask_spread_percentage} base={val.base} target={val.target} />)}
                    </div>
                </div>
            </>}
        </div>
    )
}

export default ExchangeData
