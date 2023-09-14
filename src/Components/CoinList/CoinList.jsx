import { useContext } from "react"
import CoinContext from "../../Context/CoinContext"

const CoinList = () => {
    const { coin, setCoin } = useContext(CoinContext)
    // console.log(coin)
    const value = coin.coinList
    console.log(value)

    return (
        <>
            {/* <h1>{coinss}</h1> */}
        </>
    )
}

export default CoinList
