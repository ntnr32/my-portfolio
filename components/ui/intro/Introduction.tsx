import Image from 'next/image'
import React from 'react'

const Introduction = () => {
    return (
        <div className='grid grid-flow-col grid-col-12 h-full w-full'>
            <div className='col-span-6 grid content-center'>
                <span>Software Engineer</span>
                <h1>
                    <span>Hello!,</span>
                    <span>my</span>
                    <span>name</span>
                    <span>is</span>
                    <span>Nitin.</span>
                </h1>
                <h2>
                    <span>Azure Developer</span>
                    <span>React JS Developer</span>
                </h2>
                <div className='w-64 h-1 bg-yellow-400 border border-yellow-400'></div>
            </div>
            <div className='col-span-6'>
                <div className='h-full '>
                </div>
            </div>
        </div>
    )
}

export default Introduction