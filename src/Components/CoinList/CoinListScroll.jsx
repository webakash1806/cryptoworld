const CoinListScroll = (props) => {
    const { id, price, low24, high24, priceChangePer, marketCap } = props
    return (
        <>
            <div key={id} className="flex gap-3 items-center justify-left border-b-[1px] pt-2.5 pb-2.5 h-[3.5rem] w-fit">
                <p className="min-w-[8rem] text-right ">${price.toFixed(2)}</p>
                <p className="text-red-500 min-w-[7rem] text-right ">${low24.toFixed(2)}</p>
                <p className="min-w-[7rem] text-green-600 text-right ">${high24.toFixed(2)}</p>
                <p className={(priceChangePer < 0) ? `text-red-500 min-w-[5rem] text-right ` : `text-green-600 min-w-[5rem] text-right `}>{priceChangePer.toFixed(2)}%</p>
                <p className="min-w-[10rem] text-right ">${marketCap}</p>
            </div>
        </>
    )
}

export default CoinListScroll