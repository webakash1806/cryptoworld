const CoinListScroll = (props) => {
    const { id, price, low24, high24, priceChangePer, marketCap } = props
    const decimalPlace = { maximumFractionDigits: 2 }

    return (
        <>
            <div key={id} className="flex lg:gap-3 items-center justify-left border-b-[1px] border-[#b5b5b580] dark:border-[#6f6f6fab] pt-2.5 pb-2.5 h-[3.5rem] w-fit">
                <p className="min-w-[5.5rem] md:min-w-[7rem] lg:min-w-[8rem] text-right dark:text-[#d1d1d1]">&#8377;{price === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(price)}`}</p>
                <p className="text-red min-w-[5.5rem] sm:min-w-[7rem] text-right dark">&#8377;{low24 === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(low24)}`}</p>
                <p className="dark:text-green text-[#259813] min-w-[6rem] sm:min-w-[7rem]  text-right ">&#8377;{high24 === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(high24)}`}</p>
                <p className={(priceChangePer < 0) ? `text-red min-w-[4rem] sm:min-w-[5rem] text-right ` : `dark:text-green text-[#259813] min-w-[4rem] sm:min-w-[5rem] text-right `}>{priceChangePer === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(priceChangePer)}`}%</p>
                <p className="min-w-[11rem] text-right pr-4 dark:text-[#d1d1d1]">&#8377;{Intl.NumberFormat("en-IN").format(marketCap)}</p>
            </div>
        </>
    )
}

export default CoinListScroll