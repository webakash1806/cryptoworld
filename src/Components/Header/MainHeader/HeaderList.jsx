import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderList = ({ list, url }) => {
    return (
        <NavLink style={({ isActive }) => ({
            color: isActive ? '#c35dfe' : 'white'
        })} to={url} end>
            <div className='text-[1.1rem] 
        font-[500] tracking-wide 
        w-[90vw] md:w-fit text-center md:border-0
        md:hover:border-b-2
        pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
        lg:p-[3px_9px] lg:m-[0px_11px]
         border-grey hover:border-[#bd4aff] hover:text-[#c35dfe]
         duration-200 cursor-pointer 
         border-b-[1px]'>
                {list}
            </div >
        </NavLink>
    )
}

export default HeaderList
