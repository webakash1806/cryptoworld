import React, { useEffect, useState } from 'react'

const CoinConverterCard = ({ symbol, price }) => {

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
        <div className=' flex flex-col items-center gap-2 p-[12px_10px_15px_10px] m-[15px_5px] rounded-lg text-white bg-[#1f2123]'>
            <p className='uppercase text-[25px] font-semibold tracking-wide mb-2'>{symbol} to INR</p>
            <div className=' flex items-center w-full'><p className='font-semibold uppercase min-w-[5.2rem] p-[10px_6px] text-center bg-[#303337] border-r border-grey rounded-l-md'>{symbol}</p><input className=' w-full  p-[10px_6px] bg-[#35393E] outline-none rounded-r-md' type="number" value={coinInput} onFocus={() => setSelected("coin")} onChange={handleChange} /></div>
            <div className='flex items-center w-full'><p className='font-semibold min-w-[5.2rem] p-[10px_6px] text-center bg-[#303337] border-r border-grey rounded-l-md'>INR</p><input className='w-full  p-[10px_6px] bg-[#35393E] outline-none rounded-r-md' type="number" value={INRInput} onFocus={() => setSelected("INR")} onChange={handleChange} /></div>
        </div>
    )
}

export default CoinConverterCard
