import React from 'react'
import { Link } from 'react-router-dom'

const HeaderList = ({ list }) => {
    return (
        <div className='text-[1.1rem] font-semibold tracking-wide w-[90vw] md:w-fit text-center pb-4 pt-1 border-grey hover:border-white duration-300 cursor-pointer border-b-[1px] md:border-0'>
            <Link>{list}</Link>
        </div>
    )
}

export default HeaderList
