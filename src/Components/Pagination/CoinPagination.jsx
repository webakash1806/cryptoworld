import { useContext, useState } from "react"
import ListContext from "../../Context/ListContext"

const CoinPagination = ({ pageNo }) => {
    const { list, setList } = useContext(ListContext)

    const curPage = list.page
    const changePage = () => {
        console.log(pageNo)
        if (pageNo === '<' && curPage > 1) {
            setList({ ...list, page: curPage - 1 })
        }
        else if (pageNo === '>' && curPage < 4) {
            setList({ ...list, page: curPage + 1 })
        }
        else {
            setList({ ...list, page: pageNo })
        }
    }

    return (
        <>
            <div className="">
                <button className="page-box border 
                w-[2.8rem] h-[2.1rem] 
                flex items-center justify-center 
                font-semibold text-[1.2rem] 
                cursor-pointer"
                    style={{ backgroundColor: (curPage === pageNo) ? '#F87171' : '#CBD5E1' }}
                    onClick={changePage}>
                    {pageNo}</button>
            </div >
        </>
    )
}

export default CoinPagination
