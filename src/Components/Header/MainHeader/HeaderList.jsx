import React from 'react'
import { Link } from 'react-router-dom'

const HeaderList = ({ list }) => {
    return (
        <div className='text-[1.1rem] 
        font-[400] tracking-wide 
        w-[90vw] md:w-fit text-center md:border-0
        md:hover:border-b-2
        pb-4 pt-1 md:p-[3px_8px] md:m-[0px_7px]
        lg:p-[3px_9px] lg:m-[0px_12px]
         border-grey hover:border-white 
         duration-200 cursor-pointer 
         border-b-[1px]'>
            <Link>{list}</Link>
        </div>
    )
}

export default HeaderList
