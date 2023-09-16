import Header from "../Header/Header"
import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import CoinListBox from "./CoinListBox"
import CoinPagination from "../Pagination/CoinPagination"

const CoinList = () => {
    const { list, setList } = useContext(ListContext)
    // console.log(coin)
    const value = list.coinList
    // console.log(value)
    const pageValue = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="w-fit">
            <Header />
            <h1 className="">COIN DATA</h1>
            <div className="flex flex-col gap-2 ">
                <div className="flex font-bold capitalize border-t-[1px] border-b-[1px] pt-3 pb-3">
                    <p className="min-w-[5rem] text-center ">rank</p>
                    <div className="min-w-[17.7rem]  text-left md:min-w-[20.7rem]">
                        <p >name</p>
                    </div>
                    <div className="flex gap-3">
                        <p className="min-w-[8rem] text-right ">price</p>
                        <p className="min-w-[7rem] text-right ">low24</p>
                        <p className="min-w-[7rem] text-right ">high24</p>
                        <p className="min-w-[5rem] text-right ">price %</p>
                        <p className="min-w-[10rem] text-right">marketCap</p>
                    </div>
                </div>
                {value.map((val) => <CoinListBox
                    key={val.id}
                    rank={val.market_cap_rank}
                    name={val.name}
                    symbol={val.symbol}
                    image={val.image}
                    price={val.current_price}
                    low24={val.low_24h}
                    high24={val.high_24h}
                    priceChangePer={val.market_cap_change_percentage_24h}
                    marketCap={val.market_cap} />)}

                <div className="flex">
                    {pageValue.map((val) => <CoinPagination key={val}
                        pageNo={val} />)}
                </div>
            </div>
        </div>
    )
}

export default CoinList
