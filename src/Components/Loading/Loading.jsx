import React from 'react'

const Loading = () => {
    return (

        <button className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full border-[3.2px] animate-spin border-grey border-b-[#ff13f3] dark:border-b-[#13fffb]'></div>
            <p className='text-[21px] font-semibold dark:text-grey animate-[load_1s_ease-in-out_infinite]'>Loading...</p>
        </button>
    )
}

export default Loading
