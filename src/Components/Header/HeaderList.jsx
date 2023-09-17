import { Link } from "react-router-dom"

const HeaderList = ({ url, list }) => {
    return (
        <div className="">
            <Link to={url}>{list}</Link>
        </div>
    )
}

export default HeaderList
