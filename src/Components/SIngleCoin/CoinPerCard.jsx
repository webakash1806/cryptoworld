import React from 'react'

const CoinPerCard = (props) => {
    const { per24, per7, per14, per30, per60, per1yr } = props
    return (
        <div className='border-[2.2px] rounded-[5px] border-grey'>
            <table >
                <tbody className=''>
                    <tr className='p-[5px_10px]  w-fit xs:p-[5px_20px] text-center border-b border-grey bg-[#edf5fe] dark:text-white dark:bg-[#1f2123]'>
                        <td className='border-r border-grey '>24hr</td>
                        <td className='border-r border-grey '>7d</td>
                        <td className='border-r border-grey '>14d</td>
                        <td className='border-r border-grey  '>30d</td>
                        <td className='border-r border-grey '>60d</td>
                        <td className=' w-fit xs:p-[5px_20px] '>1yr</td>
                    </tr>
                    <tr className='text-center p-[5px_10px] w-fit xs:p-[5px_20px]'>
                        <td className={`${(per24 < 0) ? 'text-red  border-r ' : ' dark:text-green text-[#259813] '}border-r border-grey w-fit p-[2px] xs:p-[5px_15px] sm:p-[5px_20px]`}>{per24}%</td>
                        <td className={`${(per7 < 0) ? 'text-red  border-r ' : ' dark:text-green text-[#259813] '}border-r border-grey w-fit p-[4px] xs:p-[5px_15px] sm:p-[5px_20px]`}>{per7}%</td>
                        <td className={`${(per14 < 0) ? 'text-red  border-r ' : ' dark:text-green text-[#259813] '}border-r border-grey w-fit p-[4px] xs:p-[5px_15px] sm:p-[5px_20px]`}>{per14}%</td>
                        <td className={`${(per30 < 0) ? 'text-red  border-r ' : ' dark:text-green text-[#259813] '}border-r border-grey w-fit p-[2px] xs:p-[5px_15px] sm:p-[5px_20px]`}>{per30}%</td>
                        <td className={`${(per60 < 0) ? 'text-red  border-r  ' : 'dark:text-green text-[#259813] '}border-r border-grey w-fit p-[4px] xs:p-[5px_15px] sm:p-[5px_20px]`}>{per60}%</td>
                        <td className={`${(per1yr < 0) ? 'text-red   ' : ' dark:text-green text-[#259813] '}xs:p-[5px_15px] p-[5px] sm:p-[5px_20px]`}>{per1yr}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CoinPerCard
