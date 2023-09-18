const ExchangeListBox = ({ id, image, name, rank, }) => {
    return (
        <>
            <div key={id} className="flex items-center justify-left border-b-[1px] pt-2.5 pb-2.5 h-[3.5rem] cursor-pointer hover:bg-[#06a0ff0a]">
                <div className="flex items-center justify-left ">
                    <p className="min-w-[2rem] md:min-w-[5rem] text-center">{rank}.</p>
                    <img src={image} alt="" className="w-[1.3rem] sm:w-[2rem] mr-3" />
                    <div className="max-w-[8rem] sm:max-w-[15rem] text-left  flex flex-col lg:flex-row lg:gap-3 md:max-w-[18rem] ">
                        <p className="font-bold ">{name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExchangeListBox
