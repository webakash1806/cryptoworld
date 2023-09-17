const CoinListBox = (props) => {
    const { id, name, image, rank, symbol } = props
    return (
        <>
            <div key={id} className="flex items-center justify-left border-b-[1px] pt-2.5 pb-2.5 h-[3.5rem]">
                <div className="flex items-center justify-left">
                    <p className="min-w-[5rem] text-center ">{rank}.</p>
                    <img src={image} alt="" className="w-[2rem] mr-3" />
                    <div className="min-w-[15rem] text-left  flex flex-col lg:flex-row lg:gap-3 md:min-w-[18rem]">
                        <p className="text-[17px] font-semibold">{name}</p>
                        <p className="text-[#505050] uppercase text-[12px]">{symbol}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinListBox
