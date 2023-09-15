const CoinListBox = (props) => {
    const { id, name, image, price, low24, high24, priceChangePer, marketCap, rank, symbol } = props
    return (
        <>
            <div key={id} className="flex items-center justify-left border-b-[1px] pt-2.5 pb-2.5">

                <p className="min-w-[5rem] text-center ">{rank}.</p>
                <img src={image} alt="" className="w-[2rem] mr-3" />
                <div className="min-w-[15rem] text-left  flex flex-col md:flex-row md:gap-3 md:min-w-[18rem]">
                    <p className="text-[17px]">{name}</p>
                    <p className="text-[#505050] uppercase text-[13px]">{symbol}</p>
                </div>

                <div className="flex gap-3">
                    <p className="min-w-[8rem] text-right ">${price.toFixed(2)}</p>
                    <p className="text-red-500 min-w-[7rem] text-right ">${low24.toFixed(2)}</p>
                    <p className="min-w-[7rem] text-green-600 text-right ">${high24.toFixed(2)}</p>
                    <p className={(priceChangePer < 0) ? `text-red-500 min-w-[5rem] text-right ` : `text-green-600 min-w-[5rem] text-right `}>{priceChangePer.toFixed(2)}%</p>
                    <p className="min-w-[10rem] text-right ">${marketCap}</p>
                </div>
            </div>
        </>
    )
}

export default CoinListBox
