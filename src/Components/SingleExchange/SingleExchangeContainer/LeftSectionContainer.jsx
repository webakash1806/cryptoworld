import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LeftSectionContainer = ({ cent, rank, image, name, vol24, vol24nor, country, year, score }) => {
    const decimalPlace = { maximumFractionDigits: 2 }

    return (
        <div className='flex flex-col gap-3 p-2 '>
            <p className='bg-[#242D38] text-white font-semibold text-[15px] tracking-wide min-w-[6rem] max-w-fit text-center p-[2px] rounded-[5px]'>Rank #{rank}</p>
            <div className='flex items-center gap-2'><img src={image} alt={`${name}image`} className='w-[2.2rem]' /><span className='font-bold text-[23px]'>{name}</span></div>
            <div className=' flex flex-col m-[10px_0] items-center min-w-[18rem] justify-center'>
                <p className='font-semibold text-[19px]'>Trust Score</p>
                <div className='w-[7.5rem] text-center'>
                    <CircularProgressbar
                        styles={buildStyles({
                            textSize: '18px',
                            pathColor: `rgba(162,46,255, ${score / 10})`,
                            textColor: '#A22EFF',
                            trailColor: '#d6d6d6',
                            backgroundColor: 'transparent',
                        })}
                        value={score} maxValue={10} text={`${score}/10`} />
                </div>
            </div>

            <div className=' flex flex-col min-w-[19rem] p-1 gap-3 text-[15px] text-grey'>
                <p className='p-1 flex w-full items-center justify-between border-b-[1px] border-grey '>Centralized<span className="">{cent === true ? 'true' : 'false'}</span></p>
                <p className='p-1 flex w-full items-center justify-between border-b-[1px] border-grey '>Est. Year<span className="text-[18.5px] dark:text-white text-black">{year}</span></p>
                <p className='p-1 flex w-full items-center justify-between border-b-[1px] border-grey '>Country<span className="text-[18.5px] dark:text-white text-black">{country}</span></p>
                <p className='p-1 flex w-full items-center justify-between border-b-[1px] border-grey '>Volume 24hr<span className="text-[18.5px] dark:text-white text-black">&#8377;{`${Intl.NumberFormat("en-IN", decimalPlace).format(vol24)}`}</span></p>
                <p className='p-1 flex w-full items-center justify-between border-b-[1px] border-grey '>Nor. Vol. 24hr<span className="text-[18.5px] dark:text-white text-black">&#8377;{`${Intl.NumberFormat("en-IN", decimalPlace).format(vol24nor)}`}</span></p>
            </div>
        </div>
    )
}

export default LeftSectionContainer