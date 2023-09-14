import { useContext } from "react"
import CoinContext from "../../Context/CoinContext"

const CoinList = () => {
    const { coin, setCoin } = useContext(CoinContext)
    return (
        <div>
            <h1>COin :{coin}</h1>
            <button onClick={() => setCoin(coin + 1)}>inc</button>
            <br />
            <button onClick={() => setCoin(coin - 1)}>dec</button>
        </div>
    )
}

export default CoinList
