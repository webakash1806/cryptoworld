import React from 'react'

const SelectedDay = ({ children, clicked, onClick }) => {
    return (
        <span onClick={onClick} className={`${clicked ? 'bg-[#e3eefb] dark:bg-[#313437]' : 'bg-white dark:bg-black'} dark:text-white border border-grey p-[5px_10px] text-center w-fit xs:p-[3.5px_20px] cursor-pointer`}>
            {children}
        </span>
    )
}

export default SelectedDay
