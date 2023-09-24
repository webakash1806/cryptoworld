import React, { useEffect, useState } from 'react'

const CoinConverterCard = ({ symbol, price, name }) => {

    const [coinInput, setCoinInput] = useState('')
    const [INRInput, setINRInput] = useState('')
    const [selected, setSelected] = useState('')

    const handleChange = (e) => {
        if (selected === 'coin') {
            setCoinInput(e.target.value)
            setINRInput(((e.target.value) * price).toFixed(2))
        }
        else {
            setINRInput(e.target.value)
            setCoinInput(((e.target.value) / price).toFixed(2))
        }
    }

    useEffect(() => {

    }, [setCoinInput, setINRInput, setSelected])
    return (
        <div className=' flex flex-col xs:p-[15px_25px] xmd:p-[15px_12px] items-center gap-2 sm:gap-3 p-[12px_10px_25px_10px] m-[15px_5px] rounded-lg bg-[#edf5fe] dark:text-white dark:bg-[#1f2123]'>
            <p className='uppercase text-[25px] font-semibold tracking-wide mb-1'>{symbol} to INR</p>
            <div className=' flex items-center w-full sm:text-[19px]'><p className='font-semibold uppercase min-w-[5.2rem] p-[10px_6px] text-center bg-[#fcf4ff] dark:bg-[#303337] border-r border-grey rounded-l-md'>{symbol}</p><input className=' w-full  p-[10px_6px] dark:bg-[#35393E] outline-none rounded-r-md' type="number" value={coinInput} onFocus={() => setSelected("coin")} onChange={handleChange} /></div>
            <div className='flex items-center w-full sm:text-[19px]'><p className='font-semibold min-w-[5.2rem] p-[10px_6px] text-center bg-[#fcf4ff] dark:bg-[#303337] border-r border-grey rounded-l-md'>INR</p><input className='w-full  p-[10px_6px] dark:bg-[#35393E] outline-none rounded-r-md' type="number" value={INRInput} onFocus={() => setSelected("INR")} onChange={handleChange} /></div>
            <p className=' text-left w-full pl-2 sm:text-[17px]'>1 {name} = &#8377;{price}</p>
        </div>
    )
}

export default CoinConverterCard
