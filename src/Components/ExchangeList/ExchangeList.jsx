import { useContext } from "react"
import ListContext from "../../Context/ListContext"
// import Exchang

const ExchangeList = () => {
    const { list, setList } = useContext(ListContext)
    const value = list.exchangeList
    console.log(value)
    return (
        <div>
            I am exchange List
        </div>
    )
}

export default ExchangeList
