import React from 'react'

const CoinPerCard = (props) => {
    const { per24, per7, per14, per30, per60, per1yr } = props
    return (
        <div className='flex'>
            <div>
                <p>24hr</p>
                <p>{per24}</p>
            </div>
            <div>
                <p>7d</p>
                <p>{per7}</p>
            </div>
            <div>
                <p>14d</p>
                <p>{per14}</p>
            </div>
            <div>
                <p>30d</p>
                <p>{per30}</p>
            </div>
            <div>
                <p>60d</p>
                <p>{per60}</p>
            </div>
            <div>
                <p>1Year</p>
                <p>{per1yr}</p>
            </div>
        </div>
    )
}

export default CoinPerCard
