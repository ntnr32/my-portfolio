import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as CONSTANT from 'utils/constant'


const Introduction = () => {

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
            className='grid gap-6 w-full'>
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
            <h3 className='text-base text-blue-400 w-full md:w-2/4'>
                I&apos;m a Software Engineer, crafting impactful web solutions that deliver exceptional user experiences and drive business results.
            </h3>
        </motion.div>
    )
}

export default Introduction