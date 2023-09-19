import { useContext } from "react"
import ListContext from "../../Context/ListContext"
import Pagination from '@mui/material/Pagination'


const CoinPagination = () => {
    const { list, setList } = useContext(ListContext)


    const handleChange = (e, p) => {
        setList({ ...list, page: p })
        window.scroll(0, 250)
    }



    return (
        <>
            <Pagination
                className="bg-white"
                count={100}
                variant="outlined"
                color="primary"
                shape="rounded"
                onChange={handleChange}
            />
        </>
    )
}

export default CoinPagination
