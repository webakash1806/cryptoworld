import React from 'react'



const TickersList = ({ rank, spread, base, target, price, volume, score }) => {

    const decimalPlace = { maximumFractionDigits: 2 }

    return (
        <div className='text-[15px] md:text-[15px] lg:text-[16px] flex lg:gap-3 items-center justify-left border-b-[1px] border-[#b5b5b580] dark:border-[#6f6f6fab] pt-2.5 pb-2.5 h-[3.5rem] w-fit'>
            <p className="min-w-[2rem]  md:min-w-[5rem] text-center">{rank}</p>
            <p className='min-w-[7rem] md:min-w-[8.5rem] text-left pl-1 '>{base}/{target}</p>
            <p className='min-w-[7.5rem] md:min-w-[9rem] text-right '>&#8377;{price === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(price)}`}</p>
            <p className='min-w-[6rem]  md:min-w-[7rem] text-center '>{spread === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(spread)}`}%</p>
            <p className='min-w-[10rem]  md:min-w-[11rem] text-right pr-2 '>&#8377;{volume === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(volume)}`}</p>
            <p className='min-w-[5rem]  md:min-w-[5.5rem] flex items-center justify-center pr-3'>{score === "green" ? <div className='h-3 w-3 bg-green rounded-[50%]'></div> : <div className='h-3 w-3 bg-red rounded-[50%]'></div>}</p>
        </div>

    )
}

export default TickersList
