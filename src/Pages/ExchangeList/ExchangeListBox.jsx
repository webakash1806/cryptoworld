import { Link } from "react-router-dom"

const ExchangeListBox = ({ id, image, name, rank, }) => {
    return (
        <>
            <Link to={`/cryptoworld/exchange/${id}`} className="flex items-center justify-left border-b-[1px] border-[#b5b5b580] dark:border-[#6f6f6fab] pt-2.5 pb-2.5 h-[3.5rem] cursor-pointer hover:bg-[#06a0ff0a]">
                <p className="min-w-[2rem] md:min-w-[5rem] text-center text-[#6f6f6f] dark:text-grey">{rank}.</p>
                <img src={image} alt="" className="w-[1.3rem] sm:w-[2rem] mr-3" />
                <div className="max-w-[8rem] sm:max-w-[15rem] text-left  flex flex-col lg:flex-row lg:gap-3 md:max-w-[18rem] ">
                    <p className="font-bold ">{name}</p>
                </div>
            </Link>
        </>
    )
}

export default ExchangeListBox
