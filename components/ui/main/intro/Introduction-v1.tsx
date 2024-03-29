import React from 'react'
import * as CONSTANT from 'utils/constant'
import MegaphoneColor from 'static/svg/megaphone-color.svg'


const IntroductionV1 = () => {
    return (
        <div className='grid grid-cols-2 h-full w-full'>
            <div className='grid content-center gap-4'>
                <h1 className='font-KnewaveOutlineRegular text-3xl sm:text-6xl 2xl:text-7xl text-left'>
                    <span className='mr-3 block text-yellow-300 hover:font-KnewaveRegular cursor-pointer sm:text-4xl 2xl:text-5xl'>
                        Hello!,
                        <span className='wave'>👋</span>
                    </span>
                    <span className='mr-3 inline'>I</span>
                    <span className='mr-3'>am</span>
                    {/* <span className='mr-3'>is</span> */}
                    <span className='mr-3 font-KnewaveRegular'>{CONSTANT.TITLE_NAME}</span>
                </h1>
                <span className='text-xs text-blue-400'>Software Engineer</span>
                {/* <h2 className='text-base'>
                    <span>Azure</span>
                    <span className='before:content-["&"] before:w-4 before:p-2'>React JS Developer</span>
                    <div className='w-40 h-1 bg-yellow-400 border border-yellow-400'></div>
                </h2> */}
            </div>
            <div className='grid content-end xl:content-center'>
                <div className='p-36 h-full w-full'>
                    <MegaphoneColor />
                </div>
            </div>
        </div>
    )
}

export default IntroductionV1