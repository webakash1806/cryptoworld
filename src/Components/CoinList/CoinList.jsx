import Header from "../Header/Header"
import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import CoinListBox from "./CoinListBox"
import CoinPagination from "../Pagination/CoinPagination"
import CoinListScroll from "./CoinListScroll"

const CoinList = () => {
    const { list, setList } = useContext(ListContext)

    return (
        <div className=" flex w-full gap-4 pb-6 flex-col items-center justify-center">
            <Header />
            <h1 className="">COIN DATA</h1>
            <div className="flex flex-col p-[0.5px]">
                <div className="flex pt-3 pb-3">
                    <div className="flex flex-col min-w-[10rem] md:min-w-[20rem] lg:min-w-[25rem]  ">
                        <div className="flex font-bold text-[14px] sm:text-[17x] capitalize border-t-[1px] border-b-[1px] pt-4 pb-4">
                            <p className="min-w-[2rem] md:min-w-[5rem] text-center ">#</p>
                            <div className="min-w-[10em] md:min-w-[15.5rem] lg:min-w-[17.7rem] text-left">
                                <p >name</p>
                            </div>
                        </div>
                        <div className="text-[15px] md:text-[15px] lg:text-[16px]">
                            {list.coinList.map((val) => <CoinListBox
                                key={val.id}
                                rank={val.market_cap_rank}
                                name={val.name}
                                symbol={val.symbol}
                                image={val.image}
                            />)}
                        </div>
                    </div>
                    <div className="flex flex-col min-w-[7.5] max-w-[10rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-fit lg:overflow-hidden overflow-x-scroll">
                        <div className="flex lg:gap-3 font-bold text-[14px] sm:text-[17x] capitalize border-t-[1px] border-b-[1px] pt-4 pb-4 w-fit">
                            <p className="min-w-[5.5rem] md:min-w-[7rem] lg:min-w-[8rem] text-right ">price</p>
                            <p className="min-w-[5.5rem] sm:min-w-[7rem] text-right ">low24</p>
                            <p className="min-w-[6rem] sm:min-w-[7rem] text-right ">high24</p>
                            <p className="min-w-[4rem] sm:min-w-[5rem] text-right ">%</p>
                            <p className="min-w-[10rem] text-right pr-4">marketCap</p>
                        </div>
                        <div className="text-[14px] md:text-[15px] lg:text-[16px]">
                            {list.coinList.map((val) => <CoinListScroll
                                key={val.id}
                                price={val.current_price}
                                low24={val.low_24h}
                                high24={val.high_24h}
                                priceChangePer={val.market_cap_change_percentage_24h}
                                marketCap={val.market_cap} />)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                {list.pageValue.map((val) => <CoinPagination key={val}
                    pageNo={val} />)}
            </div>
        </div>
    )
}

export default CoinList
