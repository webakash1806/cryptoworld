import React from 'react'
import useTrendingData from '../../Hooks/useTrendingData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading';

const TrendingCoin = () => {
    const [trendingList, setTrendingList, isLoading] = useTrendingData()
    console.log(trendingList)
    const responsive = {
        0: {
            items: 2,
        },
        640: {
            items: 3
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }

    }

    const item = trendingList.map((val) => {
        const decimalPlace = { maximumFractionDigits: 2 }

        return <>
            <Link className='flex flex-col items-center text-white text-[15px] md:text-[16px] lg:text-[17px] '>
                < img src={val.image} alt="" className='w-[3rem] sm:w-[3.8rem] md:w-[4.6rem] mb-2 lg:mb-4' />
                <p className='font-bold'>{val.name}</p>
                <div className='flex items-center gap-2'>
                    <span className='text-[14.5px] md:[15px] lg:[16px] text-[#d0d0d0]'>{val.symbol}</span>
                    <span className={(val.price_change_percentage_24h < 0) ? `text-red bg-black rounded-md p-[1px_3px]` : `text-green bg-black rounded-md p-[1px_3px]`}>{val.price_change_percentage_24h === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(val.price_change_percentage_24h)}`}%</span>
                </div>
                <p className="text-[17px] md:text-[18px] lg:text-[19px] text-[#eaeaea] font-semibold">&#8377;{Intl.NumberFormat("en-IN").format(val.current_price)}</p>
            </Link >
        </>
    })

    return (
        <div className='w-[17.5rem] sm:w-[39rem] md:w-[43rem] lg:w-[61rem] flex items-center justify-center'>
            {isLoading ? <Loading /> :
                <AliceCarousel
                    mouseTracking
                    autoPlayInterval={1200}
                    animationDuration={1200}
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                    items={item}
                    autoPlay
                />}
        </div>
    )
}

export default TrendingCoin