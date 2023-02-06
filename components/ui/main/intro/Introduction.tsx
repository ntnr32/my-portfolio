import React from 'react'
import { motion } from 'framer-motion'
import * as CONSTANT from 'utils/constant'


const Introduction = () => {
    return (
        <div className='grid gap-6 w-full'>
            <div
                className='grid gap-4 text-3xl sm:text-6xl 2xl:text-7xl text-left'>
                <h1 className='mr-3 block text-yellow-300 hover:font-bold cursor-pointer sm:text-4xl 2xl:text-5xl'>
                    Hello!,
                    <span className='wave'>👋</span>
                </h1>
                <h1 className='mr-3 '>I&apos;m Nitin Res</h1>
            </div>
            <h2 className='text-xl sm:text-2xl text-blue-300'>
                Bringing ideas to life on the web.
            </h2>
            <h3 className='text-base text-blue-400 md:w-2/4'>
                I&apos;m a Software Engineer, crafting impactful web solutions that deliver exceptional user experiences and drive business results.
            </h3>
        </div>
    )
}

export default Introduction