import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header/MainHeader/Header'
import CoinChart from '../Components/SIngleCoin/CoinChart'
import CoinConverterCard from '../Components/SIngleCoin/CoinConverterCard'
import useSingleCoin from '../Hooks/useSingleCoin'
import CoinDataCard from '../Components/SIngleCoin/CoinDataCard'
import CoinPerCard from '../Components/SIngleCoin/CoinPerCard'
import Loading from '../Components/Loading/Loading'
import CoinDesc from '../Components/SIngleCoin/CoinDesc'
import HtmlReactParser from 'html-react-parser'
import Footer from '../Components/Footer/Footer'

const CoinData = () => {
    const [singleCoin, setSingleCoin] = useSingleCoin()
    // console.log(singleCoin)
    const { image, rank, desc, name, price, symbol, marketCap, vol, high24, low24, per24, per1yr, per7, per30, per60, per14 } = singleCoin.singleData
    const description = `"${desc}"`
    const { id } = useParams()

    useEffect(() => {
        setSingleCoin({ ...singleCoin, id: id })
    }, [id])

    return (
        <div className=' dark:bg-darkBg w-screen overflow-hidden dark:text-white items-center justify-center min-h-screen'>
            <Header />
            {singleCoin.isLoading === true ?
                <div className='w-full h-screen flex items-center justify-center'>
                    <Loading /></div>
                :
                <>
                    <div className=' pt-16 lg:pt-24 dark:bg-darkBg dark:text-white border-b-2 pb-10  border-[#d9d8d8bf]  flex flex-col items-center  justify-center gap-4 xmd:flex-row'>
                        <div className=' xmd:border-r-2 xmd:border-[#d9d8d8bf] dark:xmd:border-[#1F2123] w-[100%] min-[18rem] xs:p-[2px_30px] sm:p-[2px_7rem] md:p-[2px_9rem] xmd:p-[2px_2px] xmd:w-[40%] lg:w-[30%]'>
                            <CoinDataCard id={id} rank={rank} name={name} symbol={symbol} img={image} price={price} high24={high24} low24={low24} per24={per24} marketCap={marketCap} vol={vol} />
                            <CoinConverterCard symbol={symbol} price={price} name={name} />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-6'>
                            <CoinChart id={id} name={name} per24={per24} per1yr={per1yr} per7={per7} per30={per30} per14={per14} per60={per60} />
                            <CoinPerCard per24={per24} per1yr={per1yr} per7={per7} per30={per30} per14={per14} per60={per60} />
                        </div>
                    </div>
                    <div className='pt-10 lg:pt-24 dark:bg-darkBg dark:text-white  flex flex-col items-center  justify-center gap-4 xmd:flex-row'>
                        <div className='p-3 xsm:p-4 w-[100%] min-[18rem] xs:p-[2px_30px] sm:p-[2px_7rem] md:p-[2px_9rem] xmd:p-[2px_2px] xmd:w-[58%] lg:w-[60%]'> <CoinDesc desc={HtmlReactParser(description)} name={name} /></div>
                    </div>
                </>
            }
            <Footer />
        </div>
    )
}

export default CoinData
