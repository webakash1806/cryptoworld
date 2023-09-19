import ListHeader from '../Header/ListHeader/ListHeader'

import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import ExchangeListBox from './ExchangeListBox'
import ExchangeListScroll from "./ExchangeListScroll"
import ExchangePagination from "../Pagination/ExchangePagination"

const ExchangeList = () => {
    const { excList, setExcList } = useContext(ListContext)

    return (
        <div className="dark:bg-darkBg dark:text-white flex gap-3 pb-6 flex-col items-center justify-center">
            <ListHeader />
            <h1 className="">Exchange DATA</h1>
            <div className="flex flex-col p-[0.5px]">
                <div className="flex pt-3 pb-3">
                    <div className="flex flex-col min-w-[10rem] md:min-w-[20rem] lg:min-w-[25rem]  ">
                        <div className="flex lg:sticky top-0 bg-white dark:bg-darkBg font-bold text-[14px] sm:text-[17x] capitalize border-t-[1px] border-b-[1px]  border-[#b5b5b580] dark:border-[#6f6f6fab] pt-4 pb-4">
                            <p className="min-w-[2rem] md:min-w-[5rem] text-center ">#</p>
                            <div className="min-w-[10em] md:min-w-[15.5rem] lg:min-w-[17.7rem] text-left">
                                <p >name</p>
                            </div>
                        </div>
                        <div className="text-[15px] md:text-[15px] lg:text-[16px] ">
                            {excList.exchangeList.map((val) => <ExchangeListBox
                                key={val.id}
                                id={val.id}
                                rank={val.trust_score_rank}
                                image={val.image}
                                name={val.name}
                            />)}
                        </div>
                    </div>
                    <div className="flex flex-col min-w-[7.5] max-w-[10rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-fit lg:overflow-visible overflow-x-scroll">
                        <div className="flex lg:sticky top-0  bg-white dark:bg-darkBg font-bold text-[14px] sm:text-[17x] capitalize border-t-[1px] border-b-[1px] border-[#b5b5b580] dark:border-[#6f6f6fab] pt-4 pb-4 w-fit">

                            <p className="min-w-[4.5rem] md:min-w-[7rem] text-center ">Year</p>

                            <p className="w-[7rem] sm:w-[8.2rem] md:w-[10rem] text-right">Trust Score</p>
                            <p className="min-w-[7rem] sm:min-w-[8rem] md:min-w-[9rem] text-right ">24hr Volume</p>
                        </div>
                        <div className="text-[14px] md:text-[15px] lg:text-[16px]">
                            {excList.exchangeList.map((val) => <ExchangeListScroll
                                key={val.id}
                                trustScore={val.trust_score}
                                year={val.year_established}
                                vol24hr={val.trade_volume_24h_btc} />)}
                        </div>
                    </div>
                </div>
            </div>

            <ExchangePagination />
        </div >

    )
}

export default ExchangeList
