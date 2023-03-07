import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const Work = () => {
    return (
        <AnimatePresence>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-8'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    // viewport={{ once: true }}
                    className='grid gap-8'>
                    <h1 className='text-4xl leading-normal font-bold'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                            Engineering
                        </span>
                    </h1>
                    <p className='text-justify'>In building azure cloud based applications, I&apos;m equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — availability, reliability, performance and scalability are priorities on my radar</p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    // viewport={{ once: true }}
                    className='grid gap-8 sm:col-start-2 sm:row-start-2'>
                    <h1 className='text-4xl font-bold'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                            Design
                        </span>
                    </h1>
                    <p className='text-justify'>I design user interface for applications using Figma and develop using either plain HTML,CSS and JavaScript and also love to develope enterprise grade applications using React JS framework.</p>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Work