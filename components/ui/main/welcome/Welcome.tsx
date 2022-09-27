import React from 'react'
import Word from './Word'

const Welcome = () => {
    return (
        <div className='grid'>
            <h1 className='font-KnewaveOutlineRegular text-center text-[12vw] sm:text-[8vw]'>
                <Word className='mr-[2vw] inline-block sm:inline hover:font-KnewaveRegular cursor-pointer' id='spanWeb'>Web</Word>
                <Word className='mr-[2vw] inline-block sm:inline'>is</Word>
                <Word className='mr-[2vw]'>an</Word>
                <Word className='mr-[2vw]'>amazing</Word>
                <Word className='mr-[2vw] block sm:inline'>place.</Word>
            </h1>
            <h2 className='font-KnewaveRegular text-[2vw] text-center'>
                All Creative people want to do the unexpected
            </h2>
        </div>
    )
}

export default Welcome