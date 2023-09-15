import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import ExchangeListBox from './ExchangeListBox'

const ExchangeList = () => {
    const { list, setList } = useContext(ListContext)
    console.log(list)
    const value = list.exchangeList
    console.log(value)
    return (
        <div>
            hye
            <div>
                {value.map((val) => <ExchangeListBox key={val.id}
                    id={val.id}
                    rank={val.trust_score_rank}
                    image={val.image}
                    name={val.name}
                    year={val.year_established}
                    vol24hr={val.trade_volume_24h_btc}
                />)}
            </div>
        </div>
    )
}

export default ExchangeList
