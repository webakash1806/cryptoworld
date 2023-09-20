import React from 'react'
import { Link } from 'react-router-dom'

const HeaderList = ({ list, url }) => {
    return (
        <div className='text-[1.1rem] 
        font-[400] tracking-wide 
        w-[90vw] md:w-fit text-center md:border-0
        md:hover:border-b-2
        pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
        lg:p-[3px_9px] lg:m-[0px_11px]
         border-grey hover:border-[#F0B90B] hover:text-[#f4c323]
         duration-200 cursor-pointer 
         border-b-[1px]'>
            <Link to={url}>{list}</Link>
        </div>
    )
}

export default HeaderList
