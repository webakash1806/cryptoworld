import React from 'react'
import DarkModeToggle from "../../../Hooks/DarkModeToggle"
import HeaderList from './HeaderList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const headerList = [{ "url": "/cryptoworld/coin", "list": "Home" },
    { url: "/cryptoworld/exchange", "list": "About" },
    { url: "/cryptoworld/exchange", "list": "FAQ" },
    { url: "/cryptoworld/exchange", "list": "Contact" },
    { url: "/cryptoworld/exchange", "list": "Projects" }]


    return (
        <div className='flex w-full items-center justify-around'>
            <div>
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faXmark} />
            </div>
            {headerList.map((val) => <HeaderList key={val.list} url={val.url} list={val.list} />)}
            <DarkModeToggle />
        </div>
    )
}

export default Header

