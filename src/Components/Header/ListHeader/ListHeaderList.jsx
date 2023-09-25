import { NavLink } from "react-router-dom"

const ListHeaderList = ({ url, list }) => {
    return (
        <div className="">
            <NavLink
                style={({ isActive }) => ({
                    color: isActive ? '#f4c323' : 'white'
                })}
                to={url}>{list}</NavLink>
        </div>
    )
}

export default ListHeaderList
