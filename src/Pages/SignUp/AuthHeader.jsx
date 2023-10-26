import React from 'react'
import { Link } from 'react-router-dom'

const AuthHeader = () => {
    return (
        <div className='mt-[5rem] text-black dark:text-white'>
            <Link to="/cryptoworld/login">Login</Link>
            <Link to="/cryptoworld/signup">SignUp</Link>
        </div>
    )
}

export default AuthHeader
