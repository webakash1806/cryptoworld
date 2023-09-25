import { NavLink } from "react-router-dom"

const ListHeaderList = ({ url, list }) => {
    return (
        <div className="">
            <NavLink
                className={({ isActive }) => (isActive ? 'text-[#f4c323]' : 'text-black dark:text-white')}
                to={url}>{list}</NavLink>
        </div>
    )
}

export default ListHeaderList
