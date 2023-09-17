import Header from "../Header/Header"
import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import CoinListBox from "./CoinListBox"
import CoinPagination from "../Pagination/CoinPagination"
import CoinListScroll from "./CoinListScroll"

const CoinList = () => {
    const { list, setList } = useContext(ListContext)

    return (
        <div className=" flex pt-6 pb-6 flex-col items-center justify-center">
            <Header />
            <h1 className="">COIN DATA</h1>
            <div className="flex flex-col gap-2 ">
                <div className="flex pt-3 pb-3">
                    <div className="flex flex-col min-w-[25rem] ">
                        <div className="flex font-bold capitalize border-t-[1px] border-b-[1px] pt-4 pb-4">
                            <p className="min-w-[5rem] text-center ">rank</p>
                            <div className="min-w-[17.7rem]  text-left md:min-w-[20.7rem]">
                                <p >name</p>
                            </div>
                        </div>
                        {list.coinList.map((val) => <CoinListBox
                            key={val.id}
                            rank={val.market_cap_rank}
                            name={val.name}
                            symbol={val.symbol}
                            image={val.image}
                        />)}
                    </div>
                    <div className="flex flex-col max-w-[30rem] lg:max-w-fit lg:overflow-hidden overflow-x-scroll">
                        <div className="flex font-bold gap-3 capitalize border-t-[1px] border-b-[1px] pt-4 pb-4 w-fit">
                            <p className="min-w-[8rem] text-right ">price</p>
                            <p className="min-w-[7rem] text-right ">low24</p>
                            <p className="min-w-[7rem] text-right ">high24</p>
                            <p className="min-w-[5rem] text-right ">price %</p>
                            <p className="min-w-[10rem] text-right">marketCap</p>
                        </div>
                        <div>
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
