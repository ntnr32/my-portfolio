import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BoyColor from 'static/svg/boy-color.svg'
import BoyPremium from 'static/svg/boy-premium.svg'

const About = () => {
    return (
        <>
            <div
                className='grid gap-y-10 m-auto xl:p-28'>
                <h1 className='font-bold text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    About Me
                </h1>
                <div className='grid grid-cols-2 gap-4'>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        // viewport={{ once: true }}
                        className='hidden sm:grid content-center xl:px-28'>
                        <BoyColor />
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        // viewport={{ once: true }}
                        className='grid content-center col-span-2 sm:col-span-1 gap-4 text-sm md:text-base'>
                        <p>Hello!, I&apos;m Nitin Res. I build things for the web.</p>
                        <p>I&apos;m a Software Engineer specializing in building (and occasionally designing) exceptional digital experience. </p>
                        <p>Web is an amazing place and I enjoy creating things live on it.</p>
                        <p>Currently my main focus is to build great inclusive & accessible applications on the internet.</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About