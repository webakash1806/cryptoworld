import { useContext } from "react"
import ListContext from "../../Context/ListContext"

const CoinPagination = ({ pageNo }) => {
    const { list, setList } = useContext(ListContext)

    const changePage = () => {
        setList({ ...list, page: pageNo })
        console.log(pageNo)
    }

    return (
        <>
            <div className="">
                <p className="border w-[2rem] cursor-pointer" onClick={changePage} > {pageNo}</p>
            </div >
        </>
    )
}

export default CoinPagination
