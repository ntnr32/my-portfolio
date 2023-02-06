import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TechStack = () => {
    return (
        <div className='grid place-content-center h-screen'>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                tech stack
            </motion.h1>
        </div>
    )
}

export default TechStack