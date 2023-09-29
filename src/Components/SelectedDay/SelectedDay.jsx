import React from 'react'

const SelectedDay = ({ children, clicked, onClick }) => {
    return (
        <span onClick={onClick} className={`${clicked ? 'bg-[#A22EFF] text-white' : 'bg-transparent'} p-[2px_10px] xs:font-semibold rounded-md w-fit xs:p-[3.5px_20px] cursor-pointer`}>
            {children}
        </span>
    )
}

export default SelectedDay
