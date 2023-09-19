import { Link } from "react-router-dom"

const ListHeaderList = ({ url, list }) => {
    return (
        <div className="">
            <Link to={url}>{list}</Link>
        </div>
    )
}

export default ListHeaderList
