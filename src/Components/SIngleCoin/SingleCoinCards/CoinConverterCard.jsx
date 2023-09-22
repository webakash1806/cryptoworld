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

    const decimalPlace = { maximumFractionDigits: 2 }


    // const convertedPrice = input * price
    // const convertedPriceIntoCoin = price / input

    // console.log(convertedPrice)

    useEffect(() => {

    }, [setCoinInput, setINRInput, setSelected])
    return (
        <div>
            <p>{symbol}to INR</p>
            <div><span>{symbol}</span><input className='border' type="number" value={coinInput} onFocus={() => setSelected("coin")} onChange={handleChange} /></div>
            <div><span>INR</span><input className='border' type="number" value={INRInput} onFocus={() => setSelected("INR")} onChange={handleChange} /></div>
        </div>
    )
}

export default CoinConverterCard
