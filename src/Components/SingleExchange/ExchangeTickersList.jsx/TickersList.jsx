import React from 'react'
import TickersListBox from './TickersListBox'

const TickersList = ({ rank }) => {

    return (
        <div>
            tickers List
            <p>{rank}</p>
            <TickersListBox />
        </div>
    )
}

export default TickersList
