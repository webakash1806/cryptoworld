const ExchangeListScroll = (props) => {
    const { id, year, vol24hr, trustScore } = props
    const decimalPlace = { maximumFractionDigits: 2 }

    return (
        <>
            <div key={id} className="flex  items-center justify-left border-b-[1px] border-[#b5b5b580] dark:border-[#6f6f6fab] pt-2.5 pb-2.5 h-[3.5rem] w-fit">
                {(year === null) ? <p className="min-w-[4.5rem] md:min-w-[7rem] text-center text-red">No Data</p> : <p className="min-w-[4.5rem] md:min-w-[7rem] text-center dark:text-[#d1d1d1]">{year}</p>}

                <div className="flex items-center justify-end gap-2 w-[7rem] sm:w-[8.2rem] md:w-[10rem] ">
                    <p>{trustScore}</p>
                    <progress className="h-[5.5px] w-[5rem] md:h-2 sm:w-[6rem] md:w-[7rem] [&::-webkit-progress-bar]:rounded-lg  [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-green " value={trustScore} max="10"></progress>
                </div>
                <p className="min-w-[7rem] sm:min-w-[8rem] md:min-w-[9rem] text-green-600 text-right dark:text-[#d1d1d1]">&#8377;{vol24hr === null ? "---" : `${Intl.NumberFormat("en-IN", decimalPlace).format(vol24hr)}`}</p>
            </div>
        </>
    )
}

export default ExchangeListScroll