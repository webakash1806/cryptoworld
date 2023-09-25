import React, { useState } from 'react'
import DarkModeToggle from "../../../Hooks/DarkModeToggle"
import HeaderList from './HeaderList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import useHeaderList from '../../../Hooks/useHeaderList'

const Header = () => {

    const [barActive, setBarActive] = useState(true)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }


    return (
        <header className='flex w-full md:justify-between  md:pl-14 md:pr-6 lg:pl-16 lg:pr-8 lg:p-3 bg-darkBg text-white items-center justify-around z-[100] pt-[6px] pb-[6px] shadow-[-1px_1px_7px_#000] fixed top-0 left-0'>
            <div className=' w-[2rem] h-[2rem] flex items-center justify-center md:hidden cursor-pointer text-[#f6a441]' onClick={hamActive}>
                {barActive ? <FontAwesomeIcon icon={faBars} className='text-[1.3rem]' />
                    : <FontAwesomeIcon icon={faXmark} className='text-[1.6rem]' />}
            </div>
            <div className='md:mr-6 lg:mr-10'>LOGO</div>
            <nav className={`bg-darkBg text-white md:border-0 shadow-[0px_160px_1000px_#12073ac5] md:shadow-none flex border-t-[#201154] border-t-2  p-4 pb-10 md:p-0 w-screen md:max-w-[80vw]  items-center justify-between gap-3 md:gap-0 flex-col absolute 
            ${barActive ? "top-[2.95rem] left-[-60rem] duration-[0.5s]" : "top-[2.85rem] left-0 duration-[0.5s]"}
             md:flex-row md:static `}>
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 ">
                    {useHeaderList.map((val) => <HeaderList key={val.list} url={val.url} list={val.list} />)}
                </div>
                <button className='w-[90vw] bg-[#F7931A] rounded-md md:w-fit p-3 mt-6 md:m-0 md:mr-4 md:p-[6px_16px] md:rounded-[4px] md hover:bg-[#dfab00] duration-300'>Login/Signup</button>
            </nav>
            <DarkModeToggle />
        </header>
    )
}

export default Header

