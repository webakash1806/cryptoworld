const ExchangeListBox = ({ id, image, name, rank, year, vol24hr }) => {
    return (
        <>
            <div key={id} className="flex items-center justify-left border-b-[1px] pt-2.5 pb-2.5">

                <p className="min-w-[5rem] text-center ">{rank}.</p>
                <img src={image} alt="" className="w-[2rem] mr-3" />
                <div className="min-w-[15rem] text-left  flex flex-col md:flex-row md:gap-3 md:min-w-[18rem] ">
                    <p className="text-[17px]">{name}</p>
                </div>

                <div className="flex gap-3">
                    {(year === null) ? <p className="min-w-[8rem] text-right ">No Data</p> : <p className="min-w-[8rem] text-right ">{year}</p>}
                    <p className="min-w-[10rem] text-green-600 text-right ">${vol24hr.toFixed(2)}</p>
                    {/* <p className={(priceChangePer < 0) ? `text-red-500 min-w-[5rem] text-right ` : `text-green-600 min-w-[5rem] text-right `}>{priceChangePer.toFixed(2)}%</p> */}
                    {/* <p className="min-w-[10rem] text-right ">${marketCap}</p> */}
                    {/* <p className="min-w-[8rem] text-right ">${price.toFixed(2)}</p> */}
                </div>
            </div>
        </>
    )
}

export default ExchangeListBox
