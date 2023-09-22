import React from 'react'

const CoinDataCard = (props) => {

    const { id, rank, name, symbol, img, price, high24, low24, marketCap, vol, per24 } = props

    const decimalPlace = { maximumFractionDigits: 2 }
    return (
        <div>
            <p>Rank #{rank}</p>
            <div><img src={img} alt={`${name}image`} /><span>{name}<span>{symbol}</span></span></div>
            <p className="">&#8377;{price === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(price)}`}
                <span className={(per24 < 0) ? `text-red min-w-[4rem] sm:min-w-[5rem] text-right ` : `dark:text-green text-[#259813] min-w-[4rem] sm:min-w-[5rem] text-right `}>{per24 === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(per24)}`}%</span></p>
            <div>
                <p>24H Range</p>
                <meter className=" " min={low24} max={high24} value={price} ></meter>
                <div> <p>{low24}</p><p>{high24}</p> </div>
            </div>
            <div>
                <p>Market Cap<span className="">&#8377;{marketCap === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(marketCap)}`}</span></p>
                <p>Trading Vol.(24hr)<span className="">&#8377;{vol === undefined ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(vol)}`}</span></p>
            </div>
        </div>
    )
}

export default CoinDataCard
