import React from 'react'

const CoinDataCard = (props) => {

    const { id, rank, name, symbol, img, price, high24, low24, marketCap, vol, per24 } = props


    const decimalPlace = { maximumFractionDigits: 2 }
    return (
        <div className='flex flex-col gap-2 p-2 '>
            <p className='bg-[#242D38] text-white font-semibold text-[15px] tracking-wide w-fit p-[2px_7px] rounded-[5px]'>Rank #{rank}</p>
            <div className='flex items-center gap-2'><img src={img} alt={`${name}image`} className='w-[2.2rem]' /><span className='font-bold text-[23px]'>{name}<span className='ml-1 uppercase font-semibold text-[16px] text-grey'>{symbol}</span></span></div>
            <p className="font-bold text-[30px]">&#8377;{price === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(price)}`}
                <span className={(per24 < 0) ? ` font-semibold text-red text-[20px] ml-2` : `dark:text-green text-[#259813] text-[20px] ml-2 font-semibold`}>{per24}%</span></p>
            <div className='flex flex-col p-3 min-w-[18rem] items-center bg-[#edf5fe] dark:text-white dark:bg-[#1f2123] rounded-md'>
                <p className='font-semibold'>24hr Range</p>
                <meter className="w-full" min={low24} max={high24} value={price} ></meter>
                <div className='flex items-center justify-between w-full'> <p>&#8377;{low24}</p><p>&#8377;{high24}</p> </div>
            </div>
            <div className='flex flex-col min-w-[19rem] p-1 gap-3 text-[15px] text-grey'>
                <p className='p-1 flex w-full items-center justify-between border-b-[1px] border-grey '>Market Cap<span className="text-[18.5px] dark:text-white text-black">&#8377;{marketCap === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(marketCap)}`}</span></p>
                <p className='p-1 flex w-full items-center justify-between border-b-[1px] border-grey '>Trading Vol.(24hr)<span className="text-[18.5px] dark:text-white text-black">&#8377;{vol === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(vol)}`}</span></p>
            </div>
        </div>
    )
}

export default CoinDataCard
