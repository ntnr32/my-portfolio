import React from 'react'
import * as CONSTANT from 'utils/constant'
import Work from 'static/svg/work.svg'

const Introduction = () => {
    return (
        <div className='grid grid-cols-2 h-full w-full'>
            <div className='grid content-center gap-4'>
                <span className='text-xs text-blue-400'>Software Engineer</span>
                <h1 className='font-KnewaveOutlineRegular text-3xl sm:text-6xl 2xl:text-7xl text-left'>
                    <span className='mr-3 block text-yellow-300 hover:font-KnewaveRegular cursor-pointer'>
                        Hello!,
                        <span className='wave'>👋</span>
                    </span>
                    <span className='mr-3 inline'>my</span>
                    <span className='mr-3'>name</span>
                    <span className='mr-3'>is</span>
                    <span className='mr-3 font-KnewaveRegular'>{CONSTANT.TITLE_NAME}</span>
                </h1>
                <h2 className='text-base'>
                    <span>Azure</span>
                    <span className='before:content-["&"] before:w-4 before:p-2'>React JS Developer</span>
                    <div className='w-40 h-1 bg-yellow-400 border border-yellow-400'></div>
                </h2>
            </div>
            <div className='grid content-end xl:content-center'>
                <div className='p-12 2xl:p-56 h-full w-full'>
                    <Work />
                </div>
            </div>
        </div>
    )
}

export default Introduction