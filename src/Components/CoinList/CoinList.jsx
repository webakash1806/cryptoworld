import { useContext } from "react"
import CoinContext from "../../Context/CoinContext"
import CoinListBox from "../CoinListBox"

const CoinList = () => {
    const { coin, setCoin } = useContext(CoinContext)
    // console.log(coin)
    const value = coin.coinList
    console.log(value)

    return (
        <>
            <h1 className="">COIN DATA</h1>
            <div className="">
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
            </div>
        </>
    )
}

export default CoinList
