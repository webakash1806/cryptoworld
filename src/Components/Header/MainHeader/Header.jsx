import React, { useState } from 'react'
import DarkModeToggle from "../../../Hooks/DarkModeToggle"
import HeaderList from './HeaderList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [barActive, setBarActive] = useState(true)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }

    const headerList = [{ "url": "/cryptoworld", "list": "Home" },
    { url: "/cryptoworld/about", "list": "About" },
    { url: "/cryptoworld/FAQ", "list": "FAQ" },
    { url: "/cryptoworld/contact", "list": "Contact" },
    { url: "/cryptoworld/projects", "list": "Projects" }]



    return (
        <header className='flex w-screen bg-[#8247E5] text-white items-center justify-around z-[100] pt-[9px] pb-[9px] shadow-[-1px_1px_7px_#9b3bfb] fixed top-0 left-0'>
            <div className=' w-[2rem] h-[2rem] flex items-center justify-center md:hidden cursor-pointer' onClick={hamActive}>
                {barActive ? <FontAwesomeIcon icon={faBars} className='text-[1.3rem]' />
                    : <FontAwesomeIcon icon={faXmark} className='text-[1.6rem]' />}
            </div>
            <div>LOGO</div>
            <nav className={`bg-[#8247E5] text-white md:border-0 flex border-t-grey border-t-2  p-4 pb-10 md:p-0 w-screen md:w-fit items-center justify-center gap-3 md:gap-0 flex-col absolute 
            ${barActive ? "top-[3.12rem] left-[-55rem] duration-[0.5s]" : "top-[3.12rem] left-0 duration-[0.5s]"}
             md:flex-row md:static `}>
                {headerList.map((val) => <HeaderList key={val.list} url={val.url} list={val.list} />)}

                <button className='w-[90vw] bg-darkBg rounded-md md:w-fit p-3 mt-6 md:m-0 md:p-0 hover:bg-[#242424] duration-300'>Login/Signup</button>
            </nav>
            <DarkModeToggle />
        </header>
    )
}

export default Header

