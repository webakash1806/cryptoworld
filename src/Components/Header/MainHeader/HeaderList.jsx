import React from 'react'
import { Link } from 'react-router-dom'

const HeaderList = ({ list }) => {
    return (
        <div className=''>
            <Link>{list}</Link>
        </div>
    )
}

export default HeaderList
