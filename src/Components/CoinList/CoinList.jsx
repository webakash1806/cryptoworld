import ListHeader from '../Header/ListHeader/ListHeader'
import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import CoinListBox from "./CoinListBox"
import CoinPagination from "../Pagination/CoinPagination"
import CoinListScroll from "./CoinListScroll"
import TrendingCoin from "../Trending/TrendingCoin"
import Header from '../Header/MainHeader/Header'
import bannerImage from '../../assets/trendingbanner.png'


const CoinList = () => {
    const { list, setList } = useContext(ListContext)


    return (
        <div className=" dark:bg-darkBg dark:text-white flex gap-4 pb-6 flex-col items-center justify-center">
            <Header />
            <div className='w-full shadow-[0px_0px_40px_#1d037b80] bg-[#1d037b80] h-[15rem] sm:h-[16rem] md:h-[18rem] lg:h-[19.5rem] flex items-center justify-center bg-no-repeat bg-cover'
                style={{ backgroundImage: `linear-gradient(to right,#04021498, #19085642),url(${bannerImage})`, backgroundPosition: 'center' }}>    <TrendingCoin /></div>

            <ListHeader />
            <h1 className="">COIN DATA</h1>
            <div className="flex pt-3 pb-3  p-[0.5px]">
                <div className="flex flex-col min-w-[10rem] md:min-w-[20rem] lg:min-w-[25rem]  ">
                    <div className="flex lg:sticky top-0 bg-white dark:bg-darkBg font-bold text-[14px] sm:text-[17x] capitalize border-t-[1px] border-b-[1px] border-[#b5b5b580] dark:border-[#6f6f6fab] pt-4 pb-4">
                        <p className="min-w-[2rem] md:min-w-[5rem] text-center ">#</p>
                        <div className="min-w-[9rem] md:min-w-[15.5rem] lg:min-w-[17.7rem] text-left">
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
                <div className="flex flex-col min-w-[2rem] max-w-[9.5rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-full lg:overflow-visible overflow-x-scroll">
                    <div className="flex lg:sticky top-0 bg-white dark:bg-darkBg lg:gap-3 font-bold text-[14px] sm:text-[17x] capitalize border-t-[1px] border-b-[1px] border-[#b5b5b580] dark:border-[#6f6f6fab] pt-4 pb-4 w-fit">
                        <p className="min-w-[5.5rem] md:min-w-[7rem] lg:min-w-[8rem] text-right ">price</p>
                        <p className="min-w-[5.5rem] sm:min-w-[7rem] text-right ">low24</p>
                        <p className="min-w-[6rem] sm:min-w-[7rem] text-right ">high24</p>
                        <p className="min-w-[4rem] sm:min-w-[5rem] text-right ">%</p>
                        <p className="min-w-[11rem] text-right pr-6">marketCap</p>
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
            <CoinPagination />

        </div>
    )
}

export default CoinList
