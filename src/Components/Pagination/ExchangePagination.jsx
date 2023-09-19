import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import Pagination from '@mui/material/Pagination'


const ExchangePagination = () => {
    const { excList, setExcList } = useContext(ListContext)

    const handleChange = (e, p) => {
        setExcList({ ...excList, excPage: p })
    }


    return (
        <>
            <Pagination className="bg-white" count={10}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            // classes={}
            />
        </>
    )
}

export default ExchangePagination
