import React from 'react'

const CoinDesc = ({ desc, name }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-[22px] font-semibold'>What is <span className='font-bold tracking-wide pr-[1px]'>{name}</span>?</p>
            <p className='text-left mt-2'>{desc}</p>
        </div>
    )
}

export default CoinDesc
