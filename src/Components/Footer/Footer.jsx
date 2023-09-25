import React from 'react'
import useHeaderList from '../../Hooks/useHeaderList'
import FooterNav from './FooterNav'

const Footer = () => {
    console.log(useHeaderList)
    return (
        <div className='flex flex-col items-center justify-center text-white bg-[#0C161B] shadow-[-1px_-2px_7px_#000]'>
            <div className=' p-[25px_0px] h-fit gap-5 flex flex-col items-start justify-around md:flex-row md:w-full'>

                <div className='w-[19rem] md:w-[17rem] border-b md:border-none pb-4'>
                    <div className='text-left'>
                        LOGO
                    </div>
                    <p className='text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus rem vitae earum odio, aspernatur necessitatibus.</p>
                </div>

                <div className='flex flex-col border-b md:border-none pb-4 w-full md:w-fit'>{useHeaderList.map((val) =>
                    <FooterNav key={val.list} url={val.url} list={val.list} />
                )}</div>

                <div className='flex flex-col items-start gap-2'>
                    <p>NewsLetter</p>
                    <input type="text" placeholder='Enter Email!' className='w-[19rem] text-black rounded-sm p-[5px] text-[18px] outline-none border-none' />
                    <button className='w-[19rem] md-[17rem] bg-[#f08400] hover:bg-[#ff930e] duration-300 p-[6px] rounded-sm font-semibold tracking-wide'>SUBSCRIBE</button>
                </div>
            </div>
            <div className='p-[8px] bg-[#101440] w-full text-center'>
                <p className='flex items-center justify-center gap-1 text-[15px] font-semibold'><span className='text-[22px]'>&copy;</span>CryptoWorld 2023 | Akash Kumar Singh</p>
            </div>
        </div>
    )
}

export default Footer
