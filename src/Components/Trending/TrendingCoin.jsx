import React from 'react'
import useTrendingData from '../../Hooks/useTrendingData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom'

const TrendingCoin = () => {
    const [trendingList, setTrendingList] = useTrendingData()
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
        }
    }

    const item = trendingList.map((val) => {
        const decimalPlace = { maximumFractionDigits: 2 }

        return <>
            <Link className='flex flex-col items-center text-[15px] md:text-[16px] lg:text-[18px]'>
                < img src={val.image} alt="" className='w-[3rem] sm:w-[4rem] md:w-[5.5rem] mb-2 lg:mb-4' />
                <p className='font-bold'>{val.name}</p>
                <div className='flex items-center gap-2'>
                    <span className='text-[13.5px] md:[14px] lg:[15px] text-grey'>{val.symbol}</span>
                    <span className={(val.price_change_percentage_24h < 0) ? `text-red ` : `dark:text-green text-[#259813]`}>{val.price_change_percentage_24h === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(val.price_change_percentage_24h)}`}%</span>
                </div>
                <p className=" dark:text-[#d1d1d1] font-semibold">&#8377;{Intl.NumberFormat("en-IN").format(val.current_price)}</p>
            </Link >
        </>
    })

    return (
        <div className='w-[90vw]'>
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
            />
        </div>
    )
}

export default TrendingCoin