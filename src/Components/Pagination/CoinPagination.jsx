import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import Pagination from '@mui/material/Pagination'


const CoinPagination = () => {
    const { list, setList } = useContext(ListContext)

    const handleChange = (e, p) => {
        setList({ ...list, page: p })
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

export default CoinPagination
