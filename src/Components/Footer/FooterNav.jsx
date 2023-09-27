import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterNav = ({ list, url }) => {
    console.log(list)
    return (
        <NavLink style={({ isActive }) => ({
            color: isActive ? '#f4c323' : 'white'
        })} to={url} end>
            <div className='text-[1.1rem] 
        font-[400] tracking-wide 
        text-left  
          hover:border-[#F0B90B] hover:text-[#f4c323]
         duration-200 cursor-pointer 
         hover:border-b-[1px]'>
                {list}
            </div>
        </NavLink>
    )
}

export default FooterNav
