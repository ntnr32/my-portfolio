import React from 'react'
import { Heading } from 'components'
import { motion, AnimatePresence } from 'framer-motion'

const Work = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-8'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    // viewport={{ once: true }}
                    className='grid gap-4 md:gap-8'>
                    <Heading className='text-4xl font-bold'>
                        Engineering
                    </Heading>
                    <p className='text-justify text-sm md:text-base'>In building azure cloud based applications, I&apos;m equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — availability, reliability, performance and scalability are priorities on my radar</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50, }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    // viewport={{ once: true }}
                    className='grid gap-4 md:gap-8 sm:col-start-2 sm:row-start-2'>
                    <Heading className='text-4xl font-bold'>
                        Design
                    </Heading>
                    <p className='text-justify text-sm md:text-base'>I design user interface for applications using Figma and develop using either plain HTML,CSS and JavaScript and also love to develope enterprise grade applications using React JS framework.</p>
                </motion.div>
            </div>
        </>
    )
}

export default Work