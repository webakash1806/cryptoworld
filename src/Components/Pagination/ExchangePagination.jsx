import { useContext } from "react"
import ListContext from "../../Context/ListContext"

const ExchangePagination = ({ pageNo }) => {
    const { excList, setExcList } = useContext(ListContext)

    const changePage = () => {
        setExcList({ ...excList, excPage: pageNo })
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

export default ExchangePagination
