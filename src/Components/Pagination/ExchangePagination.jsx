import { useContext } from "react"
import ListContext from "../../Context/ListContext"

const ExchangePagination = ({ pageNo }) => {
    const { excList, setExcList } = useContext(ListContext)

    const curPage = excList.excPage

    const changePage = () => {
        console.log(pageNo)
        if (pageNo === '<' && curPage > 1) {
            setExcList({ ...excList, excPage: curPage - 1 })
            console.log(excList.page)
        }
        else if (pageNo === '>' && curPage < 6) {
            setExcList({ ...excList, excPage: curPage + 1 })
            console.log(excList.page)
        }
        else {
            setExcList({ ...excList, excPage: pageNo })
            console.log(excList.page)
        }
    }

    return (
        <>
            <div className="border">
                <p className="border w-[2.8rem] h-[2.1rem] flex items-center justify-center font-semibold text-[1.2rem] cursor-pointer" style={{ backgroundColor: curPage === pageNo ? '#F87171' : '#CBD5E1' }} onClick={changePage} > {pageNo}</p>
            </div >
        </>
    )
}

export default ExchangePagination
