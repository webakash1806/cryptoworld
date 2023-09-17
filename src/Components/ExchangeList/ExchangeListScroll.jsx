const ExchangeListScroll = (props) => {
    const { id, year, vol24hr, trustScore } = props
    return (
        <>
            <div key={id} className="flex  items-center justify-left border-b-[1px] pt-2.5 pb-2.5 h-[3.5rem] w-fit">
                {(year === null) ? <p className="min-w-[4.5rem] md:min-w-[7rem] text-center">No Data</p> : <p className="min-w-[4.5rem] md:min-w-[7rem] text-center">{year}</p>}

                <div className="flex items-center justify-end gap-2 w-[7rem] sm:w-[8.2rem] md:w-[10rem] ">
                    <p>{trustScore}</p>
                    <progress className="h-[5.5px] w-[5rem] md:h-2 sm:w-[6rem] md:w-[7rem] [&::-webkit-progress-bar]:rounded-lg  [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-red-400 " value={trustScore} max="10"></progress>
                </div>
                <p className="min-w-[7rem] sm:min-w-[8rem] md:min-w-[9rem] border text-green-600 text-right ">${vol24hr.toFixed(2)}</p>
                {/* <p className={(priceChangePer < 0) ? `text-red-500 min-w-[5rem] text-right ` : `text-green-600 min-w-[5rem] text-right `}>{priceChangePer.toFixed(2)}%</p> */}
                {/* <p className="min-w-[10rem] text-right ">${marketCap}</p> */}
                {/* <p className="min-w-[8rem] text-right ">${price.toFixed(2)}</p> */}
            </div>
        </>
    )
}

export default ExchangeListScroll