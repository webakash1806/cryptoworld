import { NavLink } from "react-router-dom"

const ListHeaderList = ({ url, list }) => {
    return (
        <NavLink
            style={({ isActive }) => ({
                color: isActive ? '#fff' : '',
                background: isActive ? '#A22EFF' : 'transparent',
            })}

            className='p-[3px_25px] font-semibold rounded-md'

            to={url} end>{list}</NavLink>
    )
}

export default ListHeaderList
