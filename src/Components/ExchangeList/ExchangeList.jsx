import Header from "../Header/Header"
import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import ExchangeListBox from './ExchangeListBox'
import Pagination from "../Pagination/ExchangePagination"

const ExchangeList = () => {
    const { excList, setExcList } = useContext(ListContext)
    const value = excList.exchangeList
    const pageValue = ['<', 1, 2, 3, 4, 5, 6, '>']

    return (
        <div className="flex flex-col items-center justify-center w-fit pt-6 pb-6">
            <Header />
            hye
            <div>
                <div className="flex font-bold capitalize border-t-[1px] border-b-[1px] pt-3 pb-3">
                    <p className="min-w-[5rem] text-center ">rank</p>
                    <div className="min-w-[17.7rem]  text-left md:min-w-[20.7rem]">
                        <p >name</p>
                    </div>
                    <div className="flex gap-3">
                        <p className="min-w-[10rem] text-right">Trust Score</p>
                        <p className="min-w-[8rem] text-right">Launch Year</p>
                        <p className="min-w-[10rem] text-right ">24hr Volume</p>
                        {/* <p className="min-w-[7rem] text-right ">high24</p>
                        <p className="min-w-[5rem] text-right ">price %</p>
                        <p className="min-w-[10rem] text-right">marketCap</p> */}
                    </div>
                </div>
                {value.map((val) => <ExchangeListBox key={val.id}
                    id={val.id}
                    rank={val.trust_score_rank}
                    image={val.image}
                    name={val.name}
                    trustScore={val.trust_score}
                    year={val.year_established}
                    vol24hr={val.trade_volume_24h_btc}
                />)}

            </div>
            <div className="page flex ">
                {pageValue.map((val) => <Pagination key={val}
                    pageNo={val} />)}
            </div>
        </div>
    )
}

export default ExchangeList
