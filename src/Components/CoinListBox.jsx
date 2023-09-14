const CoinListBox = (props) => {
    const { id, name, image, price, low24, high24, priceChangePer, marketCap, rank, symbol } = props
    return (
        <div key={id} className="flex items-center justify-left">
            <p className="w-[3rem] text-center border">{rank}.</p>
            <img src={image} alt="" className="w-8" />
            <div className="w-[10rem] text-left border">
                <p >{name}</p>
                <p>{symbol}</p>
            </div>

            <div className="flex gap-3">
                <p className="w-[8rem] text-right border">${price.toFixed(2)}</p>
                <p className="text-red-500 w-[7rem] text-right border">${low24.toFixed(2)}</p>
                <p className="w-[7rem] text-green-600 text-right border">${high24.toFixed(2)}</p>
                <p className={(priceChangePer < 0) ? `text-red-500 w-[5rem] text-right border` : `text-green-600 w-[5rem] text-right border`}>{priceChangePer.toFixed(2)}%</p>
                <p className="w-[10rem] text-right border">${marketCap}</p>
            </div>
        </div>
    )
}

export default CoinListBox
